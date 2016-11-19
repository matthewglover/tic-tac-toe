// @flow
const test = require('tape');
const mod = require('../../src/board/get_board_status');

const getBoardStatus = mod.default;

test('getBoardStatus', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 0, 2,
  ];

  t.equal(getBoardStatus(board), 0, 'returns current status of board');
  t.end();
});

test('getBoardStatus', (t) => {
  const board = [
    0, 0, 1,
    1, 0, 1,
    2, 2, 2,
  ];

  t.equal(getBoardStatus(board), 2, 'returns current status of board');
  t.end();
});

test('getBoardStatus', (t) => {
  const board = [
    1, 0, 1,
    2, 1, 2,
    2, 0, 1,
  ];

  t.equal(getBoardStatus(board), 1, 'returns current status of board');
  t.end();
});
