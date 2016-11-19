// @flow

export const otherType = (playerMove: Player): Player =>
  (playerMove === 1
    ? 2
    : 1);

export const numMoves = (playerMove: Player, board: Board): number =>
  board.reduce(
    (acc, x) =>
      (x === playerMove
        ? acc + 1
        : acc),
    0);

const isValidMoves = (playerStart: Player, board: Board): boolean => {
  const startMoves = numMoves(playerStart, board);
  const otherMoves = numMoves(otherType(playerStart), board);

  return (
    startMoves === otherMoves ||
    startMoves === otherMoves + 1);
};

export default isValidMoves;
