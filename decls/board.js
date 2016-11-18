declare type MoveType =
  1 | 2;

declare type BoardValue =
  MoveType | 0;

declare type Board = [
  BoardValue, BoardValue, BoardValue,
  BoardValue, BoardValue, BoardValue,
  BoardValue, BoardValue, BoardValue,
];
