// @flow
const test = require('tape');
const mod = require('../../src/board/is_complete_board');

const isCompleteBoard = mod.default;

test('isCompleteBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.true(isCompleteBoard(board), 'returns true if complete board');
  t.end();
});

test('isCompleteBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 2, 1,
    2, 2, 2,
  ];

  t.true(isCompleteBoard(board), 'returns true if complete board');
  t.end();
});

test('isCompleteBoard', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.false(isCompleteBoard(board), 'returns false if incomplete board');
  t.end();
});

test('isCompleteBoard', (t) => {
  const board = [
    2, 1, 2,
    2, 1, 1,
    1, 2, 1,
  ];

  t.true(isCompleteBoard(board), 'returns true if complete board');
  t.end();
});
