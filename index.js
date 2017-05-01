#!/usr/bin/env node
const game = require('commander');
const userPrompt = require('prompt');
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
  .option('-s', userPrompt.start())
  .action(function() {
    console.log(board);
  })
.parse(process.argv);
