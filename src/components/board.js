// @flow
import React from 'react';
import SquareContainer from './square_container';

const generateSquares = (): Array<React$Element<*>> =>
  Array.from(
    { length: 9 },
    (_, i) =>
      <SquareContainer key={i} position={i} />);

const Board = (): React$Element<*> =>
  <div className="board">
    {generateSquares()}
  </div>;

export default Board;
