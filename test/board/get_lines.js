// @flow
const test = require('tape');
const {
  getLines,
  getRows,
  getCols,
  getDiags } = require('../../src/board');


test('getRows', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    getRows(board),
    [
      [0, 0, 1],
      [1, 0, 1],
      [2, 2, 2],
    ],
    'returns ordered list of rows');
  t.end();
});

test('getRows', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.deepEqual(
    getRows(board),
    [
      [2, 0, 1],
      [1, 0, 1],
      [2, 0, 2],
    ],
    'returns ordered list of rows');
  t.end();
});

test('getCols', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    getCols(board),
    [
      [0, 1, 2],
      [0, 0, 2],
      [1, 1, 2],
    ],
    'returns ordered list of cols');
  t.end();
});

test('getCols', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.deepEqual(
    getCols(board),
    [
      [2, 1, 2],
      [0, 0, 0],
      [1, 1, 2],
    ],
    'returns ordered list of cols');
  t.end();
});

test('getDiags', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    getDiags(board),
    [
      [0, 0, 2],
      [1, 0, 2],
    ],
    'returns ordered list of diags (tl -> br, tr -> bl)');
  t.end();
});

test('getDiags', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.deepEqual(
    getDiags(board),
    [
      [2, 0, 2],
      [1, 0, 2],
    ],
    'returns ordered list of diags (tl -> br, tr -> bl)');
  t.end();
});


test('getLines', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    getLines(board),
    [
      [0, 0, 1],
      [1, 0, 1],
      [2, 2, 2],
      [0, 1, 2],
      [0, 0, 2],
      [1, 1, 2],
      [0, 0, 2],
      [1, 0, 2],
    ],
    'returns ordered list of lines: (rows, cols, diags)');
  t.end();
});

test('getLines', (t) => {
  const board = [
    2, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.deepEqual(
    getLines(board),
    [
      [2, 0, 1],
      [1, 0, 1],
      [2, 0, 2],
      [2, 1, 2],
      [0, 0, 0],
      [1, 1, 2],
      [2, 0, 2],
      [1, 0, 2],
    ],
    'returns ordered list of lines: (rows, cols, diags)');
  t.end();
});
