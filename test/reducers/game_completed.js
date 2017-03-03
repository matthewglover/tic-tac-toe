// @flow
const test = require('tape');
const gameCompletedReducer = require('../../src/reducers/game_completed').default;
const { setGameCompleted, reset } = require('../../src/action_creators');


test('gameCompletedReducer returns false as initial state', (t) => {
  t.equal(
    gameCompletedReducer(undefined, { type: '@@INIT' }),
    false);
  t.end();
});

test('gameCompletedReducer, given reset action, returns false', (t) => {
  t.equal(
    gameCompletedReducer(true, reset()),
    false);
  t.end();
});

test('gameCompletedReducer, given setGameCompleted action of true, returns true', (t) => {
  t.equal(
    gameCompletedReducer(false, setGameCompleted(true)),
    true);
  t.end();
});

test('gameCompletedReducer, given setGameCompleted action of false, returns false', (t) => {
  t.equal(
    gameCompletedReducer(true, setGameCompleted(false)),
    false);
  t.end();
});
