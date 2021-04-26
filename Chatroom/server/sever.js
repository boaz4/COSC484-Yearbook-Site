var express = require('express');
var router = require('./routes/routes.js.js')
var path = require('path');
var app = express();
app.set('view engine', 'js');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);
module.exports=app;