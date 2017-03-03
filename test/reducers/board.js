// @flow
const test = require('tape');
const boardReducer = require('../../src/reducers/board').default;
const { move, setBoard } = require('../../src/action_creators');


test('boardReducer returns an empty board as initial state', (t) => {
  t.deepEqual(
    boardReducer(undefined, { type: '@@INIT' }),
    [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]);
  t.end();
});


test('boardReducer, given a board action, returns a new board with move made', (t) => {
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
    ]);

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
    ]);
  t.end();
});


test('boardReducer, given a setBoard action, returns the board specified in setBoard action', (t) => {
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
    newBoard);
  t.end();
});
