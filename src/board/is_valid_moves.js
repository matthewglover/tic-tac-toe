// @flow
import getNumMoves from './get_num_moves';

/**
 * Check if moves are valid - i.e. the players have made the correct number of moves
 */
const isValidMoves = (board: Board): boolean => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return (
    p1Moves === p2Moves ||
    p1Moves === p2Moves + 1);
};

export default isValidMoves;
