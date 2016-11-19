import isValidMoves from './is_valid_moves';
import getWinningLines from './get_winning_lines';


const isValidBoard = (startPlayer: Player, board: Board): boolean =>
  isValidMoves(startPlayer, board) &&
  getWinningLines(board).length <= 1;

export default isValidBoard;
