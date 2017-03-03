// @flow
const test = require('tape');
const { getNumMoves } = require('../../src/board');


test('getNumMoves', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(getNumMoves(board, 1), 3, 'returns number of specified player\'s moves');
  t.end();
});
