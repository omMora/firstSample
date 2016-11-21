var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var config = require('./config');

//connect to database
mongoose.connect(config.url);

var app = express();

// Configure Express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exteded: false }));

// Load routes
require('./routes/task.routes')(app);


app.listen(config.port, function(){
    console.log('Server running on port ', config.port);
})

//module.exports = app;