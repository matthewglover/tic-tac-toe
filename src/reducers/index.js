// @flow
import { combineReducers } from 'redux';
import board, * as fromBoard from './board';
import game, * as fromGame from './game';

const rootReducer: AppReducer =
  combineReducers({
    board,
    game,
  });

export default rootReducer;

export const isHumanPlayer = (state: AppState): boolean => {
  const activePlayer = fromBoard.getActivePlayer(state.board);

  return fromGame.getPlayerType(state.game, activePlayer) === 'HUMAN';
};
