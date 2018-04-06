const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://mo1086_prezenty:kup1sz0nPrezenty@85.194.242.29:27017/mo1086_prezenty');

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on:', port);
