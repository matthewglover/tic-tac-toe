// @flow


export const otherType = (moveType: MoveType): MoveType =>
  (moveType === 1
    ? 2
    : 1);

export const numMoves = (moveType: MoveType, board: Board): number =>
  board.reduce(
    (acc, x) =>
      (x === moveType
        ? acc + 1
        : acc),
    0);

const validMoves = (startType: MoveType, board: Board): boolean => {
  const startMoves = numMoves(startType, board);
  const otherMoves = numMoves(otherType(startType), board);

  return (
    startMoves === otherMoves ||
    startMoves === otherMoves + 1);
};

export default validMoves;
