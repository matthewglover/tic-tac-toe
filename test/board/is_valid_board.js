// @flow
const test = require('tape');
const mod = require('../../src/board/is_valid_board');

const isValidBoard = mod.default;

test('isValidBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.true(isValidBoard(1, board), 'returns true if valid board (correct moves and 0 | 1 winners)');
  t.end();
});

test('isValidBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 2, 1,
    2, 2, 2,
  ];

  t.false(isValidBoard(1, board), 'returns false if invalid board (incorrect moves or > 1 winners)');
  t.end();
});

test('isValidBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 1, 1,
    2, 2, 2,
  ];

  t.false(isValidBoard(1, board), 'returns false if invalid board (incorrect moves or > 1 winners)');
  t.end();
});
