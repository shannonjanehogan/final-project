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
const multer      = require('multer');
const fs          = require('fs');
// const router      = express.Router()

function inspect(o, d) {
  console.log(util.inspect(o, { colors: true, depth: d || 1}));
}

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");






var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});





  // Mount all resource routes

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

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

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

<<<<<<< HEAD
app.post("/api/signup/submit", (req, res) => {
  knex('users')
  .insert({
    'name': req.body.name,
    'email': req.body.email,
    'security_question': req.body.question,
    'security_answer': req.body.answer})
  .returning("id")
  .then((results) => {
    res.json(results);
  });
});

app.get("/api/login/email", (req, res) => {
  knex('users')
  .select('name', 'security_question')
  .where('email', req.query.email)
  .then((results) => {
    res.json(results);
  });
});

app.get("/api/login/submit", (req, res) => {
   knex('users')
    .select('id')
    .where('security_answer', req.query.answer)
    .then((results) => {
      res.json(results);
    });
});

=======
app.get("/upload", (req, res) => {
  res.render("upload");
});

app.get('/api/upload/email', (req, res) => {
  knex('users')
    .select('id')
    .where('email', req.query.email)
    .then((results) => {
      res.json(results);
  });
});


app.post('/api/images', (req, res) => {
  console.log("SERVER CONNECTED")
<<<<<<< HEAD
  debugger;
  var file_path = __dirname + '/public/images/users/2' + req.file.filename;
  knex('photos')
    .insert({
      'user_id': req.body.name,
      'file_path': file_path})
    .returning("id")
    .then((results) => {
      res.json(results);
  });


// File input field name is simply 'file'
// app.post('/api/images/upload', upload.single('imgBLAH'), (req, res) => {
//   debugger;
//   console.log("SERVER CONNECTED")
//   console.log("req.file.path", req.file)
//   var file_path = __dirname + '/public/images/users/{id}' + req.file.filename;
//   knex('photos')
//     .insert({
//       'user_id': req.body.name,
//       'file_path': file_path})
//     .returning("id")
//     .then((results) => {
//       res.json(results);
//   });
=======
  console.log(req)
  var img = __dirname + '/public/images/users/:id' + req.file.filename;
>>>>>>> parent of 9280b1a... New migration: add photos table to database, add photos seed file
  // console.log(img)
  // fs.rename(req.img.path, img, function(err) {
  //   if (err) {
  //     console.log(err);
  //     res.send(500);
  //   } else {
  //     res.json({
  //       message: 'File uploaded successfully',
  //       imgname: req.file.originalName
  //     });
  //   }
  // });
});


>>>>>>> image-react
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
