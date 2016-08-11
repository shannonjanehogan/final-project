require('dotenv').config();

const express     = require('express');
const ENV         = process.env.ENV || 'development';
const PORT        = process.env.PORT || 8080;
const app         = express();
const server      = require('http').Server(app);
const io          = require('socket.io')(server);
const util        = require('util');
const bodyParser  = require('body-parser');
const sass        = require('node-sass-middleware');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

function inspect(o, d) {
  console.log(util.inspect(o, { colors: true, depth: d || 1}));
}

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

  // Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/api/signup/submit", (req, res) => {
  knex('users').insert({
    'name': req.data.name,
    'email': req.data.email,
    'security_question': req.data.security_question,
    'security_answer': req.data.security_answer})
  .returning("id")
  .then((results) => {
    res.json(results);
  });
});

app.get("/api/login/email", (req, res) => {
  knex.select('*')
    .from('users')
    .returning('name', 'id', 'security_question')
    .where('email', req.data.email)
    .then((results) => {
      res.json(results);
    });
});

app.get("/api/login/submit", (req, res) => {
  knex.select('id')
    .from('users')
    .returning('id')
    .where('answer', req.data.answer)
    .then((results) => {
      res.json(results);
    });
});

// app.get("/ping", (req, res) => {
//   io.emit("news", "Cool beans");
//   res.end('OK');
// });

// app.get("/list", (req, res) => {
//   res.end(JSON.stringify(Object.keys(io.sockets.sockets)));
// });



// io.on('connection', (client) => {

//   console.log(`Client ${client.id} has connected`);
//   client.emit('news', "Hello")
//   // client.on('media-capabilities', (data) => {

//   // })

//   // client.on('video-start', (cb) => ...)
// });
