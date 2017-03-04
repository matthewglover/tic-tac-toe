// @flow
import { makeMove, getNextPlayer, EMPTY_BOARD } from '../board';


const boardReducer = (board: Board = EMPTY_BOARD, action: Action): Board => {
  switch (action.type) {
    case 'RESET':
      return EMPTY_BOARD;
    case 'MOVE':
      return makeMove(board, getNextPlayer(board), action.position);
    case 'SET_BOARD':
      return action.board;
    default:
      return board;
  }
};

export default boardReducer;

export const getActivePlayer = getNextPlayer;
