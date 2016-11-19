// @flow

const getNumMoves = (player: Player, board: Board): number =>
  board.reduce(
    (acc, x) =>
      (x === player
        ? acc + 1
        : acc),
    0);

export default getNumMoves;
