// @flow

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

const getLines = (board: Board): Array<Line> =>
  [
    ...getRows(board),
    ...getCols(board),
    ...getDiags(board),
  ];

export default getLines;
