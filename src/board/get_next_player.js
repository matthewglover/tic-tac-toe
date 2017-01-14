// @flow
import getNumMoves from './get_num_moves';

/**
 * Get next player based on current game state (player 1 always starts)
 */
const getNextPlayer = (board: Board): Player => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return p1Moves === p2Moves
    ? 1
    : 2;
};

export default getNextPlayer;
