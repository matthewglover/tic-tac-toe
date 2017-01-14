// @flow
import getLines from './get_lines';
import getLineStatus from './get_line_status';

/**
 * Check if line has a winner
 */
const isWinningLine = (line: Line): boolean => {
  const lineStatus = getLineStatus(line);

  return (
    lineStatus === 1 ||
    lineStatus === 2);
};

/**
 * Get all winning lines from a board
 */
const getWinningLines = (board: Board): Array<Line> =>
  getLines(board)
  .filter(isWinningLine);

export default getWinningLines;
