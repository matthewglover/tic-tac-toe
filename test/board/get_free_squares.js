// @flow
const test = require('tape');
const { getFreeSquares } = require('../../src/board');


test('getFreeSquares', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(getFreeSquares(board), [0, 1, 4], 'returns list of free indices');
  t.end();
});


test('getFreeSquares', (t) => {
  const board = [
    0, 0, 0,
    1, 2, 1,
    0, 2, 2,
  ];

  t.deepEqual(getFreeSquares(board), [0, 1, 2, 6], 'returns list of free indices');
  t.end();
});

test('getFreeSquares', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    1, 2, 2,
  ];

  t.deepEqual(getFreeSquares(board), [], 'returns list of free indices');
  t.end();
});
