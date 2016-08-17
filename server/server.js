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
//app.use(bodyParser.urlencoded({ extended: true }));
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
app.get("/api/images/upload", (req, res) => {
  console.log("server is connected")
  console.log(req.query.email)
  knex('users')
  .select('id')
  .where('email', req.query.email)
  .then((results) => {
    console.log(results[0].id)
  let id = results[0].id;
    res.json({
      user_id: id
    });

  });
});

// app.post('/api/images/upload/:id',  (req, res) => {
//   var upload = multer({ dest: './public/images/users/' + req.params.id});
//   upload.single('img')(req,res,function(){})
//   console.log("SERVER CONNECTED")
//   console.log("file", req.filename)
//   res.status(201).end()
//   knex('photos')
//     .insert({
//       'user_id': req.params.id,
//       'file_path': '../server/public/images/users/' + req.params.id + '/'})
//     .then((results) => {
//       console.log("results", results)
//       console.log("req.file", req.file)
//     });
// });

// Multer storage options
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/images/users/1')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname + '-' + Date.now() + '.jpg')
//     }
// });
// var upload = multer({ storage: storage });

// app.post('/multer', upload.single('file'), function (req, res) {
//    // Need full filename created here
// });

app.post('/api/images/upload/:id', (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, img, cb) {
        cb(null, './public/images/users/' + req.params.id)
    },
    imgname: function (req, img, cb) {
        cb(null, img.originalname + '-' + Date.now() + '.jpg')
    }
  });
  var upload = multer({ storage: storage });
  upload.single('img')(req,res,function(){})
  console.log("SERVER CONNECTED")
  console.log("resimg", req.img)
  res.status(200).end()
  knex('photos')
    .insert({
      'user_id': req.params.id,
      'file_path': '../server/public/images/users/' + req.params.id + '/' + req.img.imgname })
    .then((results) => {
      console.log("results", results)
      console.log("req.file", req.file)
    });
});

app.get('/api/user/:id/images', (req, res) => {
  knex('photos')
    .select('file_path')
    .where('user_id', req.params.id)
    .then((results) => {
      console.log("results", results);
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

app.get("/upload", (req, res) => {
  res.render("upload");
});


// File input field name is simply 'file'
// app.post('/api/images/upload', upload.single('img'), function(req, res) {
//   console.log("SERVER CONNECTED")
//   // console.log("name")
//   // var img = __dirname + '/public/images/users/:id' + req.file.filename;
//   // console.log(img)
//   // fs.rename(req.img.path, img, function(err) {
//   //   if (err) {
//   //     console.log(err);
//   //     res.send(500);
//   //   } else {
//   //     res.json({
//   //       message: 'File uploaded successfully',
//   //       imgname: req.file.originalName
//   //     });
//   //   }
//   // });
// });
