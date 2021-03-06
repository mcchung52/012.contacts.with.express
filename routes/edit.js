'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.post('/:id', function(req, res){
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