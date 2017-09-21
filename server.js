var express = require('express');
var app = express();

app.use(express.static('./app'));
app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: './app' });
});

app.listen('3000');

console.log('Port 3000 is up');
exports = module.exports = app;
