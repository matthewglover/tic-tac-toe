// @flow
import React from 'react';
import Square from './square';

const generateSquares = (): Array<React$Element<*>> =>
  Array.from(
    { length: 9 },
    (_, i) =>
      <Square key={i} pos={i} />);

const Board = (): React$Element<*> =>
  <div className="board">
    {generateSquares()}
  </div>;

export default Board;
