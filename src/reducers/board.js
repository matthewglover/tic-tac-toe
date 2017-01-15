// @flow
import makeMove from '../board/make_move';
import getNextPlayer from '../board/get_next_player';

const EMPTY_BOARD: Board =
  Array.from({ length: 9 }, () => 0);

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
