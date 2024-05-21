require('dotenv').config();

const mongoose = require('mongoose');

var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');

mongoose.connect(process.env.MONGODB_URL);


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

module.exports = app;