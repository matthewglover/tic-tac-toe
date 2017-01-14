

/**
 * Get free squares on the board by position
 */
const getFreeSquares = (board: Board): Array<Number> =>
  board.reduce(
    (acc, square, idx) =>
      (square === 0
        ? acc.concat(idx)
        : acc)
    , []);

export default getFreeSquares;
