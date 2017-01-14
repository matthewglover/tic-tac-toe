import isValidMoves from './is_valid_moves';
import getWinningLines from './get_winning_lines';


/**
 * Check if board is valid - i.e. moves are valid and no more than one winning line
 */
const isValidBoard = (board: Board): boolean =>
  isValidMoves(board) &&
  getWinningLines(board).length <= 1;

export default isValidBoard;
