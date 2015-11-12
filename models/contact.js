'use strict';

var fs = require('fs');
var Contact = {};

Contact.getAll = function(cb) {
  fs.readFile('db/contacts.json',function(err,data){
    if (err) {
      cb(err);
    } 
    else {
      var list = JSON.parse(data)
      cb(null, list);
    }
  });
};

Contact.create = function(contact,cb){
  Contact.getAll(function(err,list){
    if(err) return cb(err);
    list.push(contact);
    var data = JSON.stringify(list);
    fs.writeFile('db/contacts.json', data, function(err){
      if(err) return cb(err);
      cb(null);
    });
  });
};

Contact.edit = function(i,elem,cb){
  Contact.getAll(function(err,list){
    if(err) return cb(err);
    list.splice(i,1,elem);
    var data = JSON.stringify(list);
    fs.writeFile('db/contacts.json', data, function(err){
      if(err) return cb(err);
      cb(null);
    });
  });
};

Contact.delete = function(i,cb){
  Contact.getAll(function(err,list){
    if(err) return cb(err);
    list.splice(i,1);
    var data = JSON.stringify(list);
    fs.writeFile('db/contacts.json', data, function(err){
      if(err) return cb(err);
      cb(null);
    });
  });
};

module.exports = Contact;