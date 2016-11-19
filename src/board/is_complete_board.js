// @flow
import getWinningLines from './get_winning_lines';

const isCompleteBoard = (board: Board): boolean =>
  getWinningLines(board).length === 1;

export default isCompleteBoard;
