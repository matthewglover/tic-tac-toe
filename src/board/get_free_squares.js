

const getFreeSquares = (board: Board) =>
  board.reduce(
    (acc, square, idx) =>
      (square === 0
        ? acc.concat(idx)
        : acc)
    , []);

export default getFreeSquares;
