#!/usr/bin/env node
const game = require('commander');
const prompt = require('prompt');

let moves = ['x', 'o', ' '];
let rows = [
[moves[2], moves[2], moves[2]],
[moves[2], moves[2],  moves[2]],
[moves[2], moves[2],  moves[2]]
];

let user1 = {
  name: '',
  moves: []
}
let user2 = {
  name: '',
  moves: []
}

const createBoard = () => {
  rows.forEach((row, ind) => {
    let rowString = '| ';
    row.forEach((square, idx) => {
      rowString += square + ' | ';
    })
    if(ind !== 2){
      console.log(rowString + '\n' + '-------------');
    } else {
      console.log(rowString);
    }
    
  })
};

let playerNames = {
    properties: {
      User1: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Enter player 1 name',
        required: true
      },
      User2: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Enter player 2 name',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(playerNames, function (err, result) {
    if (err) { return onErr(err); }
    user1.name = result.User1;
    user2.name = result.User2;
    console.log('User info received:');
    console.log('  User1: ' + result.User1);
    console.log('  User2: ' + result.User2);
    createBoard();
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

