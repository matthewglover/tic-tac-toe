// @flow
const test = require('tape');
const { isValidMoves } = require('../../src/board');


test('isValidMoves - valid board', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.true(isValidMoves(board), 'returns true if equal moves');
  t.end();
});

test('isValidMoves - invalid board', (t) => {
  const board = [
    1, 1, 1,
    1, 1, 1,
    2, 2, 2,
  ];

  t.false(isValidMoves(board), 'returns false if unequal moves (> 1 difference)');
  t.end();
});

test('isValidMoves - valid board', (t) => {
  const board = [
    0, 1, 1,
    1, 2, 1,
    2, 0, 2,
  ];

  t.true(isValidMoves(board), 'returns true if one more of start type');
  t.end();
});
