declare type Player =
  1 |
  2;

declare type SquareValue =
  Player | 0;

declare type Board = [
  SquareValue, SquareValue, SquareValue,
  SquareValue, SquareValue, SquareValue,
  SquareValue, SquareValue, SquareValue,
];

declare type Line =
  [SquareValue, SquareValue, SquareValue];
