// @flow
const test = require('tape');
const gameCompletedReducer = require('../../src/reducers/game_completed').default;
const { setGameCompleted, reset } = require('../../src/action_creators');


test('gameCompletedReducer', (t) => {
  t.equal(
    gameCompletedReducer(undefined, { type: '@@INIT' }),
    false,
    'returns false as initial state');
  t.end();
});

test('gameCompletedReducer', (t) => {
  t.equal(
    gameCompletedReducer(true, reset()),
    false,
    'given reset action, returns false');
  t.end();
});

test('gameCompletedReducer', (t) => {
  t.equal(
    gameCompletedReducer(false, setGameCompleted(true)),
    true,
    'given setGameCompleted action of true, returns true');
  t.end();
});

test('gameCompletedReducer', (t) => {
  t.equal(
    gameCompletedReducer(true, setGameCompleted(false)),
    false,
    'given setGameCompleted action of false, returns false');
  t.end();
});
