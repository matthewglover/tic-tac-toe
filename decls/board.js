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
