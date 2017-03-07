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

/**
 * Get free squares on the board by position
 */
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

/**
 * Get line status - returns the winning player or zero if no winner
 */
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

/**
 * Get rows from a board
 */
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

/**
 * Get columns from a board
 */
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


/**
 * Get diagonal lines from a board
 */
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

/**
 * Get all lines from a board
 */
export const getLines = (board: Board): Array<Line> =>
  [
    ...getRows(board),
    ...getCols(board),
    ...getDiags(board),
  ];

/**
 * Check if line has a winner
 */
const isWinningLine = (line: Line): boolean => {
  const lineStatus = getLineStatus(line);

  return (
    lineStatus === 1 ||
    lineStatus === 2);
};

/**
 * Get all winning lines from a board
 */
export const getWinningLines = (board: Board): Array<Line> =>
  getLines(board)
  .filter(isWinningLine);


// ****************************************************************************
// * BOARD AND PLAYED MOVE FUNCTIONS
// ****************************************************************************

/**
 * Get number of moves made by player
 */
export const getNumMoves = (board: Board, player: Player): number =>
  board.reduce(
    (acc, x) =>
      (x === player
        ? acc + 1
        : acc),
    0);


/**
 * Check if board is full
 */
const isFullBoard = (board: Board): boolean =>
  board.every(sq => sq !== 0);

/**
 * Check board is complete - i.e. there is either one winner or the board is full
 */
export const isCompleteBoard = (board: Board): boolean =>
  getWinningLines(board).length === 1 ||
  isFullBoard(board);


/**
 * Check if moves are valid - i.e. the players have made the correct number of moves
 */
export const isValidMoves = (board: Board): boolean => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return (
    p1Moves === p2Moves ||
    p1Moves === p2Moves + 1);
};

/**
 * Check if board is valid - i.e. moves are valid and no more than one winning line
 */
export const isValidBoard = (board: Board): boolean =>
  isValidMoves(board) &&
  getWinningLines(board).length <= 1;

const eq = status => value => value === status;

/**
 * Get board status - return the winning player or zero if no winner
 */
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

/**
 * Get a new board with the specified move made
 */
export const makeMove = (board: Board, player: Player, moveSquare: number): Board => {
  const getSquareValue = calcSquareValue(board, player, moveSquare);

  return [
    getSquareValue(0), getSquareValue(1), getSquareValue(2),
    getSquareValue(3), getSquareValue(4), getSquareValue(5),
    getSquareValue(6), getSquareValue(7), getSquareValue(8),
  ];
};

/**
 * Get a list of next moves (does not check if game is complete)
 */
const getValidNextMoves = (board: Board, player: Player): Array<Board> =>
  getFreeSquares(board)
    .map(square => makeMove(board, player, square));

/**
 * Get next player based on current game state (player 1 always starts)
 */
export const getNextPlayer = (board: Board): Player => {
  const p1Moves = getNumMoves(board, 1);
  const p2Moves = getNumMoves(board, 2);

  return p1Moves === p2Moves
    ? 1
    : 2;
};

/**
 * Get a list of next moves (returns an empty array if the game is complete)
 */
export const getNextMoves = (board: Board): Array<Board> =>
  (isCompleteBoard(board)
    ? []
    : getValidNextMoves(board, getNextPlayer(board)));

/**
 * Get the other player
 */
export const getOtherPlayer = (player: Player): Player =>
  (player === 1
    ? 2
    : 1);
