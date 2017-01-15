// @flow
import { combineReducers } from 'redux';
import board, * as fromBoard from './board';
import game, * as fromGame from './game';
import getOtherPlayer from '../board/get_other_player';

const rootReducer: AppReducer =
  combineReducers({
    board,
    game,
  });

export default rootReducer;


export const getActivePlayer = (state: AppState): Player =>
  fromBoard.getActivePlayer(state.board);

export const getNextPlayer = (state: AppState): Player =>
  getOtherPlayer(getActivePlayer(state));

export const getActivePlayerType = (state: AppState) =>
  fromGame.getPlayerType(state.game, getActivePlayer(state));

export const isHumanPlayer = (state: AppState): boolean =>
  fromGame.getPlayerType(state.game, getActivePlayer(state)) === 'HUMAN';
