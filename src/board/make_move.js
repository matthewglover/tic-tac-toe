// @flow

/**
 * Get a new board with the specified move made
 */
const makeMove = (board: Board, player: Player, square: number): Board =>
  Array.from(
    { length: 9 },
    (_, i) =>
      (i === square
        ? player
        : board[i]));

export default makeMove;
