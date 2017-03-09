// @flow
const test = require('tape');
const gameReducer = require('../../src/reducers/game').default;
const { getPlayerType } = require('../../src/reducers/game');
const { setNewGame, reset } = require('../../src/action_creators');


test('gameReducer', (t) => {
  t.equal(
    gameReducer(undefined, { type: '@@INIT' }),
    null,
    'returns null as initial state');
  t.end();
});

test('gameReducer', (t) => {
  t.equal(
    gameReducer('HUMAN_HUMAN', reset()),
    null,
    'given reset action, returns null');
  t.end();
});

test('gameReducer', (t) => {
  t.equal(
    gameReducer(null, setNewGame('HUMAN_COMPUTER')),
    'HUMAN_COMPUTER',
    'given setNewGame action, returns specified game type');
  t.end();
});

test('getPlayerType', (t) => {
  t.equal(getPlayerType(null, 1), null, 'given game type of null returns null and a player');
  t.equal(getPlayerType(null, 2), null, 'given game type of null returns null and a player');
  t.end();
});

test('getPlayerType', (t) => {
  t.equal(getPlayerType('HUMAN_COMPUTER', 1), 'HUMAN', 'given non-null game type returns player type of specified player');
  t.equal(getPlayerType('COMPUTER_HUMAN', 1), 'COMPUTER', 'given non-null game type returns player type of specified player');
  t.equal(getPlayerType('COMPUTER_HUMAN', 2), 'HUMAN', 'given non-null game type returns player type of specified player');
  t.equal(getPlayerType('HUMAN_COMPUTER', 2), 'COMPUTER', 'given non-null game type returns player type of specified player');
  t.end();
});
