// @flow

type MoveType =
  1 | 2;

type BoardValue =
  MoveType | 0;

type Board = [
  BoardValue, BoardValue, BoardValue,
  BoardValue, BoardValue, BoardValue,
  BoardValue, BoardValue, BoardValue,
];


const otherType = (moveType: MoveType): MoveType =>
  (moveType === 1
    ? 2
    : 1);

const numMoves = (moveType: MoveType, board: Board): number =>
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

module.exports = {
  otherType,
  numMoves,
  validMoves,
};
