'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res){
  res.render('create');
});

router.post('/', function(req, res){
  var contact = req.body;
  Contact.create(contact,function(err){
    res.status(err ? 400 : 200).send(err || 'contact created');
  });
});

module.exports = router;