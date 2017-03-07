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
  t.true(isMoveAction(moveAction));
  t.false(isMoveAction(setNewGameAction));
  t.end();
});


test('isSetNewGameAction', (t) => {
  t.true(isSetNewGameAction(setNewGameAction));
  t.false(isSetNewGameAction(moveAction));
  t.end();
});

test('isSetBoardAction', (t) => {
  t.true(isSetBoardAction(setBoardAction));
  t.false(isSetBoardAction(moveAction));
  t.end();
});

test('any', (t) => {
  const isTestAction =
    any(isMoveAction, isSetNewGameAction, isSetBoardAction);

  t.true(isTestAction(setBoardAction));
  t.true(isTestAction(setNewGameAction));
  t.true(isTestAction(setBoardAction));
  t.false(isTestAction(nullAction));
  t.end();
});
