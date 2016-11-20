// @flow
const test = require('tape');
const mod = require('../../src/board/get_next_player');

const getNextPlayer = mod.default;

test('getNextPlayer', (t) => {
  const board = [
    0, 2, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.equal(
    getNextPlayer(board),
    1,
    'returns next player to play');
  t.end();
});

test('getNextPlayer', (t) => {
  const board = [
    1, 2, 1,
    1, 2, 1,
    2, 0, 2,
  ];

  t.equal(
    getNextPlayer(board),
    1,
    'returns next player to play');
  t.end();
});

test('getNextPlayer', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 1, 2,
  ];

  t.equal(
    getNextPlayer(board),
    2,
    'returns next player to play');
  t.end();
});
