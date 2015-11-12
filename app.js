'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/create', require('./routes/create'));
app.use('/edit', require('./routes/edit'));
app.use('/delete', require('./routes/edit'));

// 404 HANDLER
app.use(function(req, res){
  res.status(404).render('404')
});

app.listen(PORT, function(){
  console.log('Listening on port %s', PORT);
});
