var express = require('express');
var app = express();
const files = require('./app/controller/filescontroller.js');

app.get('', function(req, res){
  res.send(files.read());
});

app.listen('3000');

console.log('Port 3000 is up');
exports = module.exports = app;
