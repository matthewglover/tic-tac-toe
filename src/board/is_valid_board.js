import isValidMoves from './is_valid_moves';
import getWinningLines from './get_winning_lines';


const isValidBoard = (board: Board): boolean =>
  isValidMoves(board) &&
  getWinningLines(board).length <= 1;

export default isValidBoard;
