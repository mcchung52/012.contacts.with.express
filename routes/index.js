'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res){
  Contact.getAll(function(err,list){
    if(err) {
      // return res.status(400).send(err);
      res.status(400).send(err);
    }
    res.render('index',{ contacts: list });
  });
});

module.exports = router;