import isCompleteBoard from '../board/is_complete_board';
import * as fromActionCreators from '../action_creators';
import {
  any,
  isMoveAction,
  isSetBoardAction } from './helpers';

const isGameOver = store => () =>
  isCompleteBoard(store.getState().board);

const setCompleted = () =>
  fromActionCreators.setGameCompleted(true);

const completedGame = (action$, store) =>
  action$
    .filter(any(isMoveAction, isSetBoardAction))
    .filter(isGameOver(store))
    .delay(1000)
    .map(setCompleted);

export default completedGame;
