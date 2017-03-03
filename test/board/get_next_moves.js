// @flow
const test = require('tape');
const { getNextMoves } = require('../../src/board');


test('getNextMoves', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 1, 2,
  ];

  t.deepEqual(
    getNextMoves(board),
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
    getNextMoves(board),
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
    getNextMoves(board),
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
    getNextMoves(board).length,
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
    getNextMoves(board),
    [],
    'returns empty array if no possible moves');
  t.end();
});
