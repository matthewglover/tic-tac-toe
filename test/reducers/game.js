// @flow
const test = require('tape');
const gameReducer = require('../../src/reducers/game').default;
const { getPlayerType } = require('../../src/reducers/game');
const { setNewGame, reset } = require('../../src/action_creators');


test('gameReducer returns null as initial state', (t) => {
  t.equal(
    gameReducer(undefined, { type: '@@INIT' }),
    null);
  t.end();
});

test('gameReducer, given reset action, returns null', (t) => {
  t.equal(
    gameReducer('HUMAN_HUMAN', reset()),
    null);
  t.end();
});

test('gameReducer, given setNewGame action, returns specified game type', (t) => {
  t.equal(
    gameReducer(null, setNewGame('HUMAN_COMPUTER')),
    'HUMAN_COMPUTER');
  t.end();
});

test('getPlayerType, given game type of null returns null and a player', (t) => {
  t.equal(getPlayerType(null, 1), null);
  t.equal(getPlayerType(null, 2), null);
  t.end();
});

test('getPlayerType, given non-null game type returns player type of specified player', (t) => {
  t.equal(getPlayerType('HUMAN_COMPUTER', 1), 'HUMAN');
  t.equal(getPlayerType('COMPUTER_HUMAN', 1), 'COMPUTER');
  t.equal(getPlayerType('COMPUTER_HUMAN', 2), 'HUMAN');
  t.equal(getPlayerType('HUMAN_COMPUTER', 2), 'COMPUTER');
  t.end();
});
