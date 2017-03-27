"use strict";

const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io').listen(server);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views');
app.use(express.static('Public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('pages/stress');
});

server.listen(process.env.PORT || 8000);
console.log('Server running..');
console.log('Listening on: ' + process.env.PORT);
