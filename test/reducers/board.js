// @flow
const test = require('tape');
const boardReducer = require('../../src/reducers/board').default;
const { move, setBoard, reset } = require('../../src/action_creators');


test('boardReducer', (t) => {
  t.deepEqual(
    boardReducer(undefined, { type: '@@INIT' }),
    [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ],
    'given init action, returns empty board');
  t.end();
});


test('boardReducer', (t) => {
  t.deepEqual(
    boardReducer(
      [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
      ],
      move(2)),
    [
      0, 0, 1,
      0, 0, 0,
      0, 0, 0,
    ],
    'given move action, returns board with move made');

  t.deepEqual(
    boardReducer(
      [
        0, 1, 0,
        0, 1, 0,
        0, 2, 0,
      ],
      move(6)),
    [
      0, 1, 0,
      0, 1, 0,
      2, 2, 0,
    ],
    'given move action, returns board with move made');
  t.end();
});


test('boardReducer', (t) => {
  const newBoard =
    [
      0, 1, 0,
      0, 1, 0,
      2, 2, 0,
    ];

  t.equal(
    boardReducer(
      undefined,
      setBoard(newBoard)),
    newBoard,
    'given set board action, returns specified board');
  t.end();
});

test('boardReducer', (t) => {
  t.deepEqual(
    boardReducer(
      undefined,
      reset()),
    [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ],
    'given reset action, returns empty board');
  t.end();
});
