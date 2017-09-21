'use strict';
const files = require('./controller/filescontroller.js');

module.exports = exports = {};

var fileText = files.read();
console.log(fileText);

$('p').append(fileText);
