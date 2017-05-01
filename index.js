#!/usr/bin/env node
const game = require('commander');
const userPrompt = require('./prompt.js');
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
