
// type MoveType = 1 | 2
// type BoardValue = 0 | 1 | 2
// type Board = [
//  BoardValue, BoardValue, BoardValue,
//  BoardValue, BoardValue, BoardValue,
//  BoardValue, BoardValue, BoardValue,
// ]

// otherType :: MoveType -> MoveType
const otherType = moveType =>
  (moveType === 1
    ? 2
    : 1);

// numMoves :: (MoveType, Board) -> Number
const numMoves = (moveType, board) =>
  board.reduce(
    (acc, x) =>
      (x === moveType
        ? acc + 1
        : acc),
    0);

// validMoves :: (MoveType, Board) -> Boolean
const validMoves = (startType, board) => {
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
