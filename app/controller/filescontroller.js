'use strict';

const fs = require('fs');
module.exports = exports = {};

exports.read = function() {
  fs.readFile('./linkedIn_09-19-2017/Education.csv', (err, data) => {
    if (err) throw err;
    console.log(data.toString('utf8'));
  });
};
