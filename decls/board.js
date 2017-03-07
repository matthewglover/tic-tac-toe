declare type Player =
  1 |
  2;

declare type SquareValue =
  Player | 0;

declare type BoardStatus =
  Player | 0;

declare type SquareDisplayValue =
  'X' | 'O';

declare type Board = [
  SquareValue, SquareValue, SquareValue,
  SquareValue, SquareValue, SquareValue,
  SquareValue, SquareValue, SquareValue,
];

declare type Line =
  [SquareValue, SquareValue, SquareValue];
