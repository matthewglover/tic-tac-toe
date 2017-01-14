// @flow

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
 * Get diagnal lines from a board
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
const getLines = (board: Board): Array<Line> =>
  [
    ...getRows(board),
    ...getCols(board),
    ...getDiags(board),
  ];

export default getLines;
