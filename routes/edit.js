'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res){
  // Contact.getAll(function(err,list){
  //   if(err) {
  //     return res.status(400).send(err);
  //   }
  //   res.send(list);
  // });
  //res.render();
});

router.post('/:id', function(req, res){
  console.log('post edit',req.params.id);
  console.log('post edit',req.body);
  //var contact = req.params.contact;
  Contact.edit(req.params.id, req.body, function(err){
    if (err) {
      res.status(400).send(err);
    }
    else {
      res.send();
    }
  });
});

module.exports = router;