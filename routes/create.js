'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res){
  // Contact.getAll(function(err,list){
  // if(err) {
  //   console.log('list from /create: '+list);
  //   return res.status(400).send(err);
  // }
  //   console.log('list from /create(no error): '+list);
  //   res.send(list);
  // });
  //display the form to create
  //console.log('inside router get /create');
  res.render('create');
});

router.post('/', function(req, res){
  var contact = req.body;

  console.log('inside router post /create ', contact);

  Contact.create(contact,function(err){
    res.status(err ? 400 : 200).send(err || 'contact created');
/*
    if (err) {
      res.status(400).send(err);
      //return res.status(400).send(err);
    }
    else {
      //res.send('');
      res.render('index',Contact.getAll(function(err,data){
        if (err) {
          //res.send();
          return [];
        }
        else {
          console.log(data);
          return data;
        }
      }));
    }*/
  });
});

module.exports = router;