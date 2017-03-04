// @flow
const test = require('tape');
const rootReducer = require('../../src/reducers').default;
const { EMPTY_BOARD } = require('../../src/board');
const {
  getActivePlayer,
  getNextPlayer,
  isHumanPlayer,
  getWinner,
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

test('rootReducer returns initial state', (t) => {
  t.deepEqual(
    rootReducer(undefined, { type: '@@INIT' }),
    makeState());
  t.end();
});

test('getActivePlayer returns current active player', (t) => {
  t.equal(
    getActivePlayer(makeState()),
    1);
  t.equal(
    getActivePlayer(makeState(boardA)),
    2);
  t.equal(
    getActivePlayer(makeState(boardB)),
    1);
  t.equal(
    getActivePlayer(makeState(boardC)),
    2);
  t.end();
});

test('getNextPlayer returns next player', (t) => {
  t.equal(
    getNextPlayer(makeState()),
    2);
  t.equal(
    getNextPlayer(makeState(boardA)),
    1);
  t.equal(
    getNextPlayer(makeState(boardB)),
    2);
  t.equal(
    getNextPlayer(makeState(boardC)),
    1);
  t.end();
});

test('isHumanPlayer returns true if player is human', (t) => {
  t.true(isHumanPlayer(makeState(undefined, 'HUMAN_COMPUTER')));
  t.true(isHumanPlayer(makeState(boardA, 'COMPUTER_HUMAN')));
  t.end();
});

test('isHumanPlayer returns false if player is computer', (t) => {
  t.false(isHumanPlayer(makeState(undefined, 'COMPUTER_HUMAN')));
  t.false(isHumanPlayer(makeState(boardA, 'HUMAN_COMPUTER')));
  t.end();
});

test('isHumanPlayer returns false if gameType is null', (t) => {
  t.false(isHumanPlayer(makeState()));
  t.false(isHumanPlayer(makeState(boardA)));
  t.end();
});

test('getWinner returns 0 if no winner', (t) => {
  t.equal(getWinner(makeState()), 0);
  t.equal(getWinner(makeState(boardA)), 0);
  t.equal(getWinner(makeState(boardB)), 0);
  t.end();
});

test('getWinner returns 1 if player 1 wins', (t) => {
  t.equal(getWinner(makeState(boardC)), 1);
  t.end();
});

test('getWinner returns 2 if player 2 wins', (t) => {
  t.equal(getWinner(makeState(boardD)), 2);
  t.end();
});
