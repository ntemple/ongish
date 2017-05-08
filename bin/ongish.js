#!/usr/bin/env node

const ongish = require('../');

var myArgs = process.argv.slice(2);
var text =  myArgs.join(' ');

// console.log('*' + text + '*');

if (ongish.isOngish(text)) {
  newtext = ongish.fromOngish(text);
} else {
  newtext = ongish.toOngish(text);
}

console.log(newtext);

process.exit(0);