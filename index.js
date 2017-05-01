#!/usr/bin/env node
const game = require('commander');

var board =`
===============================
|         |         |         |
|         |         |         |
===============================
|         |         |         |
|         |         |         |
===============================
|         |         |         |
|         |         |         |
===============================`;


game
  .arguments('<file>')
  .option('-m, --move <move>', 'The location you\'d like to move') 
  .start(function() {
    console.log(board);

.parse(process.argv);