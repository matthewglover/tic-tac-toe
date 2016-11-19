// @flow
const test = require('tape');
const mod = require('../../src/board/get_num_moves');

const getNumMoves = mod.default;


test('getNumMoves', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(getNumMoves(1, board), 3, 'returns number of specified player\'s moves');
  t.end();
});
