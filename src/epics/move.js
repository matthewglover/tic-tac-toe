import * as fromReducer from '../reducers';
import miniMax from '../logic/mini_max';
import { makeMove } from '../board';
import * as fromActionCreators from '../action_creators';
import {
  any,
  isMoveAction,
  isSetNewGameAction,
  isSetBoardAction } from './helpers';

const calcNextBoard = (board) => {
  const [, nextBoard] = miniMax(board);
  return nextBoard;
};

const chooseRandom = (board) => {
  const randomVal = Math.floor(Math.random() * 10);
  return makeMove(board, 1, randomVal);
};

const isEmptyBoard = board =>
  board.every(status => status === 0);

const getActivePlayerType = store =>
  fromReducer.getActivePlayerType(store.getState());

const isComputerPlayerActive = store => () =>
  getActivePlayerType(store) === 'COMPUTER';

const isGameActive = store => () =>
  !fromReducer.isGameCompleted(store.getState());

const getNextBoard = (store) => {
  const { board } = store.getState();

  return isEmptyBoard(board)
    ? chooseRandom(board)
    : calcNextBoard(board);
};


const makeNextMove = store => () =>
  fromActionCreators.setBoard(getNextBoard(store));

const move = delay => (action$, store) =>
  action$
    .filter(isGameActive(store))
    .filter(any(isMoveAction, isSetNewGameAction, isSetBoardAction))
    .filter(isComputerPlayerActive(store))
    .delay(delay)
    .map(makeNextMove(store));

export default move;
