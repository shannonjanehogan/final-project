"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
// const ecstatic    = require('ecstatic');
const server      = require('http').Server(app);
const io          = require("socket.io")(server);
// var p2p           = require('socket.io-p2p-server').Server;
// io.use(p2p);

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const util        = require('util');
function inspect(o, d)
{
  console.log(util.inspect(o, { colors: true, depth: d || 1}));
}

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ping", (req, res) => {
  io.emit("news", "Cool beans");
  res.end('OK');
});

app.get("/list", (req, res) => {
  res.end(JSON.stringify(Object.keys(io.sockets.sockets)));
});

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

io.on('connection', (client) => {
  // clients[socket.id] = socket;
  // socket.join(roomName);
  // p2p(socket, null, room);

  console.log(`Client ${client.id} has connected`);

  // socket.on('peer-msg', function (data) {
  //   console.log('Message from peer: %s', data)
  //   socket.broadcast.emit('peer-msg', data)
  // })

  // socket.on('peer-file', function (data) {
  //   console.log('File from peer: %s', data)
  //   socket.broadcast.emit('peer-file', data)
  // })

  // socket.on('go-private', function (data) {
  //   socket.broadcast.emit('go-private', data)
  // })


  client.emit('news', "Hello")
  client.on('media-capabilities', (data) => {

  })

  // client.on('video-start', (cb) => ...)

  client.on('disconnect', () => {});
});
