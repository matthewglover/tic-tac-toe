// @flow

/**
 * Get number of moves made by player
 */
const getNumMoves = (board: Board, player: Player): number =>
  board.reduce(
    (acc, x) =>
      (x === player
        ? acc + 1
        : acc),
    0);

export default getNumMoves;
