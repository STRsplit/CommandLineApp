#!/usr/bin/env node
const game = require('commander');
const prompt = require('prompt');

let moves = ['x', 'o', ' '];
let board = [
[moves[2], moves[2], moves[2]],
[moves[2], moves[2],  moves[2]],
[moves[2], moves[2],  moves[2]]
];

let player1 = {
  name: '',
  symbol: '',
  moves: []
}
let player2 = {
  name: '',
  symbol: '',
  moves: []
}
let currentPlayer = player1;
let plays = 0;

const createBoard = () => {
  console.log(currentPlayer.name, ' it\'s your turn, select a square \n')
  board.forEach((row, ind) => {
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

let playerNames = [
      {
        description: 'Enter player 1 name',
        name: 'player1_name',
        pattern: /^[a-zA-Z\s\-]+$/,
        required: true
      },
      {
        description: 'Choose "x" or "o"',
        name: 'player1_symbol',
        pattern: /^[a-zA-Z\s\-]+$/,
        required: true
      },
      {
        description: 'Enter player 2 name',
        name: 'player2_name',
        pattern: /^[a-zA-Z\s\-]+$/,
        required: true
      }
  ];

  let move = [{
        description: 'Choose the row',
        name: 'move_row',
        pattern: /^[1-3]+$/,
        required: true,
        type: 'integer'
      },
      {
        description: 'Now choose the column',
        name: 'move_column',
        pattern: /^[1-3]+$/,
        required: true,
        type: 'integer'
      }
];
  const checkWinner = (cb) => {
    if(plays < 5){
      cb(null, null)
    } else if(checkRows() || checkColumns() || checkDiagonals()){
      cb(null, 'winner')
    }
    else if(plays === 9){
      cb('DRAW', null)
    }
  }
  const checkMove = (move, cb) => {
    if(board[move[0] - 1][move[1] - 1] !== ' '){
      cb('error', null);
    } else {
      cb(null, true)
    }
  }
  const takeTurn = (player) => {
    createBoard();
    prompt.get(move, function(err, result) {
      if (err) { return onErr(err); }
      console.log(result, result.move_row, result.move_column)
      let move = [result.move_row, result.move_column];
      checkMove(move, function(err, result) {
        if(err) {
          console.log('That space is taken, try again.');
          takeTurn(currentPlayer);
        } else {
          plays++;
          currentPlayer.moves.push(move);
          board[move[0] - 1][move[1] - 1] = currentPlayer.symbol;
          checkWinner((draw, winner) => {
            if(draw){
              console.log('WE HAVE A DRAW!');
              createBoard();
              prompt.stop();
            }
            if(winner){
              console.log('WE HAVE A WINNER:' + winner + currentPlayer.name);
              createBoard();
              prompt.stop();
            } else {
               currentPlayer = currentPlayer.name === player1.name ? player2 : player1;
               takeTurn(currentPlayer);
            }
          })
        }
      })
    });
  };
  prompt.start();

  prompt.get(playerNames, function (err, result) {
    if (err) { return onErr(err); }
    player1.name = result.player1_name;
    player2.name = result.player2_name;
    player1.symbol = result.player1_symbol;
    player2.symbol = player1.symbol === "x" ? "o" : "x";
    console.log('User info received:');
    console.log('  player1: ' + player1.name + ' Symbol: ' + player1.symbol);
    console.log('  player2: ' + player2.name + ' Symbol: ' + player2.symbol);
    takeTurn(currentPlayer);
  });

  
  
  function onErr(err) {
    console.log(err);
    return 1;
  }

