// @flow
import getWinningLines from './get_winning_lines';

/**
 * Check if board is full
 */
const isFullBoard = (board: Board): boolean =>
  board.every(sq => sq !== 0);


/**
 * Check board is complete - i.e. there is either one winner or the board is full
 */
const isCompleteBoard = (board: Board): boolean =>
  getWinningLines(board).length === 1 ||
  isFullBoard(board);

export default isCompleteBoard;
