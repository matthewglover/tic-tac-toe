import { compose } from 'redux';
import * as fromReducer from '../reducers';
import miniMax from '../logic/mini_max';
import makeMove from '../board/make_move';
import * as fromActionCreators from '../action_creators';
import {
  any,
  isMoveAction,
  isStartGameAction,
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

const getNextBoard = store => () => {
  const { board } = store.getState();

  const res = (isEmptyBoard(board)
    ? chooseRandom(board)
    : calcNextBoard(board));

  return res;
};

const getActivePlayerType = store => () =>
  fromReducer.getActivePlayerType(store.getState());

const isComputerPlayer = playerType =>
  playerType === 'COMPUTER';

const move = (action$, store) =>
  action$
    .filter(any(isMoveAction, isStartGameAction, isSetBoardAction))
    .filter(compose(isComputerPlayer, getActivePlayerType(store)))
    .delay(500)
    .map(getNextBoard(store))
    .map(fromActionCreators.setBoard);

export default move;
