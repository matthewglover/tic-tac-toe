// @flow
const test = require('tape');
const { makeMove } = require('../../src/board');


test('makeMove', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    makeMove(board, 2, 1),
    [
      0, 2, 1,
      1, 0, 1,
      2, 2, 2,
    ],
    'returns a new board with move made');
  t.end();
});

test('makeMove', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    makeMove(board, 1, 0),
    [
      1, 0, 1,
      1, 0, 1,
      2, 2, 2,
    ],
    'returns a new board with move made');
  t.end();
});

test('makeMove', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 0,
  ];

  t.deepEqual(
    makeMove(board, 1, 8),
    [
      0, 0, 1,
      1, 0, 1,
      2, 2, 1,
    ],
    'returns a new board with move made');
  t.end();
});
