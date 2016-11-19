// @flow
const test = require('tape');
const mod = require('../../src/board/get_next_move.js');

const getNextMove = mod.default;

test('getNextMove', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(
    getNextMove(1, board),
    1,
    'returns next player to play');
  t.end();
});

test('getNextMove', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(
    getNextMove(2, board),
    2,
    'returns next player to play');
  t.end();
});

test('getNextMove', (t) => {
  const board = [
    0, 0, 1,
    1, 1, 1,
    2, 2, 2,
  ];

  t.equal(
    getNextMove(1, board),
    2,
    'returns next player to play');
  t.end();
});
