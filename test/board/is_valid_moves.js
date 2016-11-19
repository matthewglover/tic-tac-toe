// @flow
const test = require('tape');
const mod = require('../../src/board/is_valid_moves');

const isValidMoves = mod.default;
const { otherType, numMoves } = mod;

test('otherType', (t) => {
  t.equal(otherType(1), 2, 'returns 2 with value of 1');
  t.end();
});

test('otherType', (t) => {
  t.equal(otherType(2), 1, 'returns 1 with value of 2');
  t.end();
});

test('numMoves', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(numMoves(1, board), 3, 'returns number of specified values on board');
  t.end();
});

test('isValidMoves - valid board', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.true(isValidMoves(1, board), 'returns true if equal moves');
  t.end();
});

test('isValidMoves - invalid board', (t) => {
  const board = [
    1, 1, 1,
    1, 1, 1,
    2, 2, 2,
  ];

  t.false(isValidMoves(1, board), 'returns false if unequal moves (> 1 difference)');
  t.end();
});

test('isValidMoves - valid board', (t) => {
  const board = [
    0, 1, 1,
    1, 2, 1,
    2, 0, 2,
  ];

  t.true(isValidMoves(1, board), 'returns true if one more of start type');
  t.end();
});
