import { compose } from 'redux';
import * as fromReducer from '../reducers';
import miniMax from '../logic/mini_max';
import * as fromActionCreators from '../action_creators';
import {
  any,
  isMoveAction,
  isStartGameAction,
  isSetBoardAction } from './helpers';


const getNextBoard = store => () => {
  const { board } = store.getState();
  const [, nextBoard] = miniMax(board);
  return nextBoard;
};

const getActivePlayerType = store => () =>
  fromReducer.getActivePlayerType(store.getState());

const isComputerPlayer = playerType =>
  playerType === 'COMPUTER';

const move = (action$, store) =>
  action$
    .filter(any(isMoveAction, isStartGameAction, isSetBoardAction))
    .filter(compose(isComputerPlayer, getActivePlayerType(store)))
    .delay(100)
    .map(getNextBoard(store))
    .map(fromActionCreators.setBoard);

export default move;
