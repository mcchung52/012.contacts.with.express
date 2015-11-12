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
      // cb(null, ''+data);
    }
  });
};

Contact.create = function(contact,cb){
  Contact.getAll(function(err,list){
    if(err) return cb(err);
    // console.log(typeof list);
    // console.log('inside contact.create ', list);
    // console.log('inside contact.create ', contact);
    // var data = JSON.parse(list);
    // console.log('inside contact.create '+data);
    list.push(contact);
    console.log(list);
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
    // console.log(typeof list);
    // console.log('inside contact.create ', list);
    // console.log('inside contact.create ', contact);
    // var data = JSON.parse(list);
    // console.log('inside contact.create '+data);
    
    list.splice(i,1,elem);
    console.log(list);
    var data = JSON.stringify(list);
    fs.writeFile('db/contacts.json', data, function(err){
      if(err) return cb(err);
      cb(null);
    });
  });
};

module.exports = Contact;