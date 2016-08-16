// require('dotenv').config();

// const express     = require('express');
// const ENV         = process.env.ENV || 'development';
// const PORT        = process.env.PORT || 8080;
// const app         = express();
// // const server      = require('http').Server(app);
// // const io          = require('socket.io')(server);
// const util        = require('util');
// const bodyParser  = require('body-parser');
// const sass        = require('node-sass-middleware');

// const knexConfig  = require("./knexfile");
// const knex        = require("knex")(knexConfig[ENV]);
// const morgan      = require('morgan');
// const knexLogger  = require('knex-logger');

// function inspect(o, d) {
//   console.log(util.inspect(o, { colors: true, depth: d || 1}));
// }

// // server.listen(PORT, () => {
// //   console.log("Example app listening on port " + PORT);
// // });

// // Seperated Routes for each Resource
// const usersRoutes = require("./routes/users");

//   // Mount all resource routes

// // app.use(function(req, res, next) {
// //  res.header("Access-Control-Allow-Origin", "*");
// //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //  next();
// // });

const express     = require('express');
const app1         = express();

// app.use("/api/users", usersRoutes(knex));
app1.use(express.static('public'));
app1.set("view engine", "ejs");
app1.use(bodyParser.urlencoded({ extended: true }));
app1.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// //         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));

// // Log knex SQL queries to STDOUT as well
// app.use(knexLogger(knex));

// // Home page
// app.get("/", (req, res) => {
//   res.render("index");
// });

var static = require('node-static');
var http = require('http');
var file = new(static.Server)();


var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8080);

app.get("/", (req, res) => {
  res.render("index");
});

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (socket){

  // convenience function to log server messages to the client
  function log(){
    var array = ['>>> Message from server: '];
    for (var i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
    }
      socket.emit('log', array);
  }

  socket.on('message', function (message) {
    log('Got message:', message);
    // for a real app, would be room only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function (room) {
    var numClients = io.sockets.clients(room).length;

    log('Room ' + room + ' has ' + numClients + ' client(s)');
    log('Request to create or join room ' + room);

    if (numClients === 0){
      socket.join(room);
      socket.emit('created', room);
    } else if (numClients === 1) {
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room);
    } else { // max two clients
      socket.emit('full', room);
    }
    socket.emit('emit(): client ' + socket.id + ' joined room ' + room);
    socket.broadcast.emit('broadcast(): client ' + socket.id + ' joined room ' + room);
  });
});

// app.post("/api/signup/submit", (req, res) => {
//   knex('users')
//   .insert({
//     'name': req.body.name,
//     'email': req.body.email,
//     'security_question': req.body.question,
//     'security_answer': req.body.answer})
//   .returning("id")
//   .then((results) => {
//     res.json(results);
//   });
// });

// app.get("/api/login/email", (req, res) => {
//   knex('users')
//   .select('name', 'security_question')
//   .where('email', req.query.email)
//   .then((results) => {
//     res.json(results);
//   });
// });

// app.get("/api/login/submit", (req, res) => {
//    knex('users')
//     .select('id')
//     .where('security_answer', req.query.answer)
//     .then((results) => {
//       res.json(results);
//     });
// });

// // app.get("/ping", (req, res) => {
// //   io.emit("news", "Cool beans");
// //   res.end('OK');
// // });

// // app.get("/list", (req, res) => {
// //   res.end(JSON.stringify(Object.keys(io.sockets.sockets)));
// // });

// // io.on('connection', (client) => {

// //   console.log(`Client ${client.id} has connected`);
// //   client.emit('news', "Hello")
// //   // client.on('media-capabilities', (data) => {

// //   // })

// //   // client.on('video-start', (cb) => ...)
// // });

// io.on('connection', (client) => {
//   // clients[socket.id] = socket;
//   // socket.join(roomName);
//   // p2p(socket, null, room);

//   console.log(`Client ${client.id} has connected`);

//   // socket.on('peer-msg', function (data) {
//   //   console.log('Message from peer: %s', data)
//   //   socket.broadcast.emit('peer-msg', data)
//   // })

//   // socket.on('peer-file', function (data) {
//   //   console.log('File from peer: %s', data)
//   //   socket.broadcast.emit('peer-file', data)
//   // })

//   // socket.on('go-private', function (data) {
//   //   socket.broadcast.emit('go-private', data)
//   // })


//   client.emit('news', "Hello")
//   client.on('media-capabilities', (data) => {

//   })

//   // client.on('video-start', (cb) => ...)

//   client.on('disconnect', () => {});
// });
