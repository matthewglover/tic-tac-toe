// @flow
const test = require('tape');
const actionCreators = require('../src/action_creators');


test('move', (t) => {
  t.deepEqual(
    actionCreators.move(1),
    {
      type: 'MOVE',
      position: 1,
    });
  t.end();
});

test('setNewGame', (t) => {
  t.deepEqual(
    actionCreators.setNewGame('COMPUTER_COMPUTER'),
    {
      type: 'SET_NEW_GAME',
      gameType: 'COMPUTER_COMPUTER',
    });
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
    });
  t.end();
});

test('setGameCompleted', (t) => {
  t.deepEqual(
    actionCreators.setGameCompleted(true),
    {
      type: 'SET_GAME_COMPLETED',
      completed: true,
    });
  t.end();
});

test('reset', (t) => {
  t.deepEqual(
    actionCreators.reset(),
    {
      type: 'RESET',
    });
  t.end();
});
