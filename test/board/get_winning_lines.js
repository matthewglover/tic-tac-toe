// @flow
const test = require('tape');
const mod = require('../../src/board/get_winning_lines');

const getWinningLines = mod.default;

test('getWinningLines', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.deepEqual(
    getWinningLines(board),
    [[2, 2, 2]],
    'returns list of winning lines');
  t.end();
});

test('getWinningLines', (t) => {
  const board = [
    0, 1, 1,
    1, 1, 1,
    2, 1, 2,
  ];

  t.deepEqual(
    getWinningLines(board),
    [[1, 1, 1], [1, 1, 1]],
    'returns list of winning lines');
  t.end();
});

test('getWinningLines', (t) => {
  const board = [
    2, 1, 1,
    1, 2, 1,
    2, 1, 2,
  ];

  t.deepEqual(
    getWinningLines(board),
    [[2, 2, 2]],
    'returns list of winning lines');
  t.end();
});
