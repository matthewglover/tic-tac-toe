// @flow
import getLines from './get_lines';
import getLineStatus from './get_line_status';

const isWinningLine = (line: Line): boolean => {
  const lineStatus = getLineStatus(line);

  return (
    lineStatus === 1 ||
    lineStatus === 2);
};


const getWinningLines = (board: Board): Array<Line> =>
  getLines(board)
  .filter(isWinningLine);

export default getWinningLines;
