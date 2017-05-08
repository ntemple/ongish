#!/usr/bin/env node

const ongish = require('../');

var text = 'test text';
var newtext = '';

if (ongish.isOngish(text)) {
  newtext = ongish.fromOngish(text);
} else {
  newtext = ongish.toOngish(text);
}

console.log(newtext);

process.exit(0);