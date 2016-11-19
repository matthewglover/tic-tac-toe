declare type Player =
  1 |
  2;

declare type ItemStatus =
  Player | 0;

declare type Board = [
  ItemStatus, ItemStatus, ItemStatus,
  ItemStatus, ItemStatus, ItemStatus,
  ItemStatus, ItemStatus, ItemStatus,
];

declare type Line =
  [ItemStatus, ItemStatus, ItemStatus];

declare type Square =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
