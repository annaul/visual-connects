var express = require('express');
var app = express();

app.get('', function(req, res){
  res.send('hello world');
});

app.listen('3000');

console.log('Port 3000 is up');
exports = module.exports = app;
