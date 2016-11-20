// @flow
const test = require('tape');
const mod = require('../../src/board/get_next_moves');

const getNextMoves = mod.default;

test('getNextMoves', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 1, 2,
  ];

  t.deepEqual(
    getNextMoves(board, 2),
    [
      [
        2, 2, 1,
        1, 0, 1,
        2, 1, 2,
      ],
      [
        2, 0, 1,
        1, 2, 1,
        2, 1, 2,
      ],
    ],
    'returns all possible next moves');
  t.end();
});


test('getNextMoves', (t) => {
  const board = [
    2, 0, 0,
    1, 0, 1,
    2, 1, 2,
  ];

  t.deepEqual(
    getNextMoves(board, 1),
    [
      [
        2, 1, 0,
        1, 0, 1,
        2, 1, 2,
      ],
      [
        2, 0, 1,
        1, 0, 1,
        2, 1, 2,
      ],
      [
        2, 0, 0,
        1, 1, 1,
        2, 1, 2,
      ],
    ],
    'returns all possible next moves');
  t.end();
});

test('getNextMoves', (t) => {
  const board = [
    1, 2, 1,
    2, 2, 1,
    1, 2, 2,
  ];

  t.deepEqual(
    getNextMoves(board, 1),
    [],
    'returns all possible next moves');
  t.end();
});

test('getNextMoves', (t) => {
  const board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];

  t.deepEqual(
    getNextMoves(board, 1).length,
    9,
    'returns all possible next moves');
  t.end();
});

test('getNextMoves', (t) => {
  const board = [
    1, 1, 1,
    0, 2, 0,
    2, 0, 0,
  ];

  t.deepEqual(
    getNextMoves(board, 1),
    [],
    'returns empty array if no possible moves');
  t.end();
});
