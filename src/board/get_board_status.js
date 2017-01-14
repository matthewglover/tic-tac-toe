// @flow
import getLines from './get_lines';
import getLineStatus from './get_line_status';

const eq = status => value => value === status;

/**
 * Get board status - returning the winning player or zero if no winner
 */
const getBoardStatus = (board: Board): ItemStatus => {
  const lineStatuses =
    getLines(board)
    .map(getLineStatus);

  if (lineStatuses.find(eq(1))) return 1;
  if (lineStatuses.find(eq(2))) return 2;
  return 0;
};

export default getBoardStatus;
