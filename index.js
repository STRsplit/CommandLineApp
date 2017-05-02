#!/usr/bin/env node
const game = require('commander');
const prompt = require('prompt');

const squares = [
['',' | ' '', ' | ',  ''],
['',' | ' '', ' | ',  ''],
['',' | ' '', ' | ',  ''],
];

let user1;
let user2;

const createBoard = () => {
  console.log(squares[0]);
  console.log(squares[1]);
  console.log(squares[2]);
};



  prompt.start();

  prompt.get(['User1', 'User2'], function (err, result) {
    if (err) { return onErr(err); }
    user1 = result.user1;
    user2 = result.user2;
    console.log('User info received:');
    console.log('  User1: ' + result.user1);
    console.log('  User2: ' + result.user2);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

