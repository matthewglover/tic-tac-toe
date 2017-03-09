// @flow
const test = require('tape');
const {
  any,
  isMoveAction,
  isSetNewGameAction,
  isSetBoardAction } = require('../../src/epics/helpers');

const moveAction = {
  type: 'MOVE',
  position: 1,
};

const setNewGameAction = {
  type: 'SET_NEW_GAME',
  gameType: 'COMPUTER_COMPUTER',
};

const setBoardAction = {
  type: 'SET_BOARD',
  board: [
    0, 1, 0,
    0, 0, 0,
    1, 2, 0,
  ],
};

const nullAction = {
  type: 'NULL_ACTION',
};

test('isMoveAction', (t) => {
  t.true(isMoveAction(moveAction), 'returns true for valid move action');
  t.false(isMoveAction(setNewGameAction), 'returns false if not valid move action');
  t.end();
});


test('isSetNewGameAction', (t) => {
  t.true(isSetNewGameAction(setNewGameAction), 'returns true for valid set new game action');
  t.false(isSetNewGameAction(moveAction), 'returns false if not valid set new game action');
  t.end();
});

test('isSetBoardAction', (t) => {
  t.true(isSetBoardAction(setBoardAction), 'returns true for valid set board action');
  t.false(isSetBoardAction(moveAction), 'returns false if not valid set board action');
  t.end();
});

test('any', (t) => {
  const isTestAction =
    any(isMoveAction, isSetNewGameAction, isSetBoardAction);

  t.true(isTestAction(setBoardAction), 'returns true if any predicate returns true');
  t.true(isTestAction(setNewGameAction), 'returns true if any predicate returns true');
  t.true(isTestAction(setBoardAction), 'returns true if any predicate returns true');
  t.false(isTestAction(nullAction), 'returns false if all predicates return false');
  t.end();
});
