// @flow
import getWinningLines from './get_winning_lines';

const isFullBoard = (board: Board): boolean =>
  board.every(sq => sq !== 0);


const isCompleteBoard = (board: Board): boolean =>
  getWinningLines(board).length === 1 ||
  isFullBoard(board);

export default isCompleteBoard;
