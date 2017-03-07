import { isCompleteBoard } from '../board';
import * as fromActionCreators from '../action_creators';
import {
  any,
  isMoveAction,
  isSetBoardAction } from './helpers';


const isGameCompleted = store => () =>
  isCompleteBoard(store.getState().board);

const setGameCompleted = () =>
  fromActionCreators.setGameCompleted(true);

const completedGame = delay => (action$, store) =>
  action$
    .filter(any(isMoveAction, isSetBoardAction))
    .filter(isGameCompleted(store))
    .delay(delay)
    .map(setGameCompleted);

export default completedGame;
