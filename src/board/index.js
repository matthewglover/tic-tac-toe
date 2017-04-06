// @flow

// ****************************************************************************
// * CONSTANTS
// ****************************************************************************

export const EMPTY_BOARD =
  [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];

// ****************************************************************************
// * SQUARE FUNCTIONS
// ****************************************************************************

export const getFreeSquares = (board: Board): Array<number> =>
  board.reduce(
    (acc, square, idx) =>
      (square === 0
        ? acc.concat(idx)
        : acc)
    , []);


export const convertSquareToDisplayValue = (squareValue: SquareValue): ?SquareDisplayValue => {
  switch (squareValue) {
    case 1: return 'X';
    case 2: return 'O';
    default: return null;
  }
};

export const isEmptySquare = (squareValue: SquareValue): boolean =>
  squareValue === 0;


// ****************************************************************************
// * LINE FUNCTIONS
// ****************************************************************************

export const getLineStatus = (line: Line): SquareValue => {
  const [a, b, c] = line;

  switch (a) {
    case 1:
      return a === b && b === c
        ? 1
        : 0;
    case 2:
      return a === b && b === c
        ? 2
        : 0;
    default:
      return 0;
  }
};

export const getRows = (board: Board): Array<Line> => {
  const [
    a, b, c,
    d, e, f,
    g, h, i,
  ] = board;

  return [
    [a, b, c],
    [d, e, f],
    [g, h, i],
  ];
};

export const getCols = (board: Board): Array<Line> => {
  const [
    a, b, c,
    d, e, f,
    g, h, i,
  ] = board;

  return [
    [a, d, g],
    [b, e, h],
    [c, f, i],
  ];
};


export const getDiags = (board: Board): Array<Line> => {
  /* eslint-disable no-unused-vars */
  const [
    a, b, c,
    d, e, f,
    g, h, i,
  ] = board;
  /* eslint-enable */

  return [
    [a, e, i],
    [c, e, g],
  ];
};

export const getLines = (board: Board): Array<Line> =>
  [
    ...getRows(board),
    ...getCols(board),
    ...getDiags(board),
  ];

const isWinningLine = (line: Line): boolean => {
  const lineStatus = getLineStatus(line);

  return (
    lineStatus === 1 ||
    lineStatus === 2);
};

export const getWinningLines = (board: Board): Array<Line> =>
  getLines(board)
  .filter(isWinningLine);


// ****************************************************************************
// * BOARD AND PLAYED MOVE FUNCTIONS
// ****************************************************************************

export const getNumMoves = (board: Board, player: Player): number =>
  board.reduce(
    (acc, x) =>
      (x === player
        ? acc + 1
        : acc),
    0);


const isFullBoard = (board: Board): boolean =>
  board.every(sq => sq !== 0);

export const isCompleteBoard = (board: Board): boolean =>
  getWinningLines(board).length === 1 ||
  isFullBoard(board);


export const isValidMoves = (board: Board): boolean => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return (
    p1Moves === p2Moves ||
    p1Moves === p2Moves + 1);
};

export const isValidBoard = (board: Board): boolean =>
  isValidMoves(board) &&
  getWinningLines(board).length <= 1;

const eq = status => value => value === status;

export const getBoardStatus = (board: Board): BoardStatus => {
  const lineStatuses =
    getLines(board)
    .map(getLineStatus);

  if (lineStatuses.find(eq(1))) return 1;
  if (lineStatuses.find(eq(2))) return 2;
  return 0;
};


export const isWinner = (boardStatus: BoardStatus): boolean =>
  boardStatus !== 0;


// ****************************************************************************
// * PLAYER AND FUTURE MOVE FUNCTIONS
// ****************************************************************************


const calcSquareValue =
  (board: Board, player: Player, moveSquare: number) =>
    (currentSquare: number): SquareValue =>
      (currentSquare === moveSquare
        ? player
        : board[currentSquare]);

export const makeMove = (board: Board, player: Player, moveSquare: number): Board => {
  const getSquareValue = calcSquareValue(board, player, moveSquare);

  return [
    getSquareValue(0), getSquareValue(1), getSquareValue(2),
    getSquareValue(3), getSquareValue(4), getSquareValue(5),
    getSquareValue(6), getSquareValue(7), getSquareValue(8),
  ];
};

const getValidNextMoves = (board: Board, player: Player): Array<Board> =>
  getFreeSquares(board)
    .map(square => makeMove(board, player, square));

export const getNextPlayer = (board: Board): Player => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return p1Moves === p2Moves
    ? 1
    : 2;
};

export const getNextMoves = (board: Board): Array<Board> =>
  (isCompleteBoard(board)
    ? []
    : getValidNextMoves(board, getNextPlayer(board)));

export const getOtherPlayer = (player: Player): Player =>
  (player === 1
    ? 2
    : 1);

export const getLastPlayer = (board: Board): Player =>
  getOtherPlayer(getNextPlayer(board));
