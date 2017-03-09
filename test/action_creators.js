// @flow
const test = require('tape');
const actionCreators = require('../src/action_creators');


test('move', (t) => {
  t.deepEqual(
    actionCreators.move(1),
    {
      type: 'MOVE',
      position: 1,
    },
    'returns move action with position set to first arg');
  t.end();
});

test('setNewGame', (t) => {
  t.deepEqual(
    actionCreators.setNewGame('COMPUTER_COMPUTER'),
    {
      type: 'SET_NEW_GAME',
      gameType: 'COMPUTER_COMPUTER',
    },
    'returns set new game action with gameType set to first arg');
  t.end();
});

test('setBoard', (t) => {
  t.deepEqual(
    actionCreators.setBoard([
      0, 0, 0,
      1, 2, 0,
      0, 0, 1,
    ]),
    {
      type: 'SET_BOARD',
      board: [
        0, 0, 0,
        1, 2, 0,
        0, 0, 1,
      ],
    },
    'returns set board action with board set to first arg');
  t.end();
});

test('setGameCompleted', (t) => {
  t.deepEqual(
    actionCreators.setGameCompleted(true),
    {
      type: 'SET_GAME_COMPLETED',
      completed: true,
    },
    'returns set game completed action with completed set to first arg');
  t.end();
});

test('reset', (t) => {
  t.deepEqual(
    actionCreators.reset(),
    {
      type: 'RESET',
    },
    'returns reset action');
  t.end();
});
