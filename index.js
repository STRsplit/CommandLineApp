#!/usr/bin/env node
const game = require('commander');
const userPrompt = require('./prompt.js');
console.log(userPrompt);
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
  .option('-s', userPrompt.prompt())
  .action(function() {
    console.log(board);
  })
.parse(process.argv);
