import isValidMoves from './is_valid_moves';
import getWinningLines from './get_winning_lines';


const isValidBoard = (board: Board, startPlayer: Player): boolean =>
  isValidMoves(board, startPlayer) &&
  getWinningLines(board).length <= 1;

export default isValidBoard;
