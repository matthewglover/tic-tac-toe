// @flow
const test = require('tape');
const rootReducer = require('../../src/reducers').default;
const { EMPTY_BOARD } = require('../../src/board');
const {
  getActivePlayer,
  getActivePlayerType,
  getNextPlayer,
  isHumanPlayer,
  getWinner,
  isGameCompleted,
} = require('../../src/reducers');
// const { setNewGame, reset } = require('../../src/action_creators');

const makeState =
  (board: Board = EMPTY_BOARD, game: ?GameType = null, gameCompleted: boolean = false): AppState =>
      ({
        board,
        game,
        gameCompleted,
      });


const boardA =
  [
    0, 1, 0,
    1, 0, 2,
    0, 0, 0,
  ];

const boardB =
  [
    0, 1, 0,
    1, 2, 2,
    0, 0, 0,
  ];

const boardC =
  [
    1, 1, 2,
    1, 2, 2,
    1, 2, 1,
  ];

const boardD =
  [
    1, 2, 0,
    1, 2, 0,
    0, 2, 1,
  ];

test('rootReducer', (t) => {
  t.deepEqual(
    rootReducer(undefined, { type: '@@INIT' }),
    makeState(),
    'returns initial state');
  t.end();
});

test('getActivePlayer', (t) => {
  t.equal(
    getActivePlayer(makeState()),
    1,
    'returns current active player');
  t.equal(
    getActivePlayer(makeState(boardA)),
    2,
    'returns current active player');
  t.equal(
    getActivePlayer(makeState(boardB)),
    1,
    'returns current active player');
  t.equal(
    getActivePlayer(makeState(boardC)),
    2,
    'returns current active player');
  t.end();
});

test('getNextPlayer', (t) => {
  t.equal(
    getNextPlayer(makeState()),
    2,
    'returns next player');
  t.equal(
    getNextPlayer(makeState(boardA)),
    1,
    'returns next player');
  t.equal(
    getNextPlayer(makeState(boardB)),
    2,
    'returns next player');
  t.equal(
    getNextPlayer(makeState(boardC)),
    1,
    'returns next player');
  t.end();
});

test('isHumanPlayer', (t) => {
  t.true(isHumanPlayer(makeState(undefined, 'HUMAN_COMPUTER')), 'returns true if player is human');
  t.true(isHumanPlayer(makeState(boardA, 'COMPUTER_HUMAN')), 'returns true if player is human');
  t.false(isHumanPlayer(makeState(undefined, 'COMPUTER_HUMAN')), 'returns false if player is computer');
  t.false(isHumanPlayer(makeState(boardA, 'HUMAN_COMPUTER')), 'returns false if player is computer');
  t.false(isHumanPlayer(makeState()), 'returns false if gameType is null');
  t.false(isHumanPlayer(makeState(boardA)), 'returns false if gameType is null');
  t.end();
});

test('getWinner', (t) => {
  t.equal(getWinner(makeState()), 0, 'returns 0 if no winner');
  t.equal(getWinner(makeState(boardA)), 0, 'returns 0 if no winner');
  t.equal(getWinner(makeState(boardB)), 0, 'returns 0 if no winner');
  t.equal(getWinner(makeState(boardC)), 1, 'returns 1 if player 1 wins');
  t.equal(getWinner(makeState(boardD)), 2, 'returns 2 if player 2 wins');
  t.end();
});

test('isGameCompleted', (t) => {
  t.false(isGameCompleted(makeState()), 'returns false if not completed');
  t.true(isGameCompleted(makeState(undefined, undefined, true)), 'returns true if completed');
  t.end();
});

test('getActivePlayerType', (t) => {
  t.true(isGameCompleted(makeState(undefined, undefined, true)), 'returns true if completed');
  t.equal(getActivePlayerType(makeState(boardA, 'COMPUTER_HUMAN', true)), 'HUMAN', 'given non-null game type returns player type of specified player');
  t.equal(getActivePlayerType(makeState(boardA, 'HUMAN_COMPUTER', true)), 'COMPUTER', 'given non-null game type returns player type of specified player');
  t.end();
});
