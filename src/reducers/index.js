// @flow
import { combineReducers } from 'redux';
import board, * as fromBoard from './board';
import game, * as fromGame from './game';
import gameCompleted from './game_completed';
import { getOtherPlayer, getBoardStatus } from '../board';


const rootReducer: AppReducer =
  combineReducers({
    board,
    game,
    gameCompleted,
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

export const getWinner = (state: AppState): ItemStatus =>
  getBoardStatus(state.board);
