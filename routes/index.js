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
    console.log('in router.index get/ ', list);
    res.render('index',{contacts:list});
  });
}); 

// router.get('/', function(req, res){
//   Contact.getAll(function(err,list){
//     if(err) {
//       return res.status(400).send(err);
//     }
//     res.send(list);
//   });
// });

module.exports = router;