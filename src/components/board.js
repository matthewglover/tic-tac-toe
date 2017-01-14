// @flow
import React from 'react';
import Square from './square';

// eslint-disable-next-line no-console
const onClick = (idx: number) => () => console.log('clicked square:', idx);


const generateSquares = (): Array<React$Element<*>> =>
  Array.from(
    { length: 9 },
    (_, i) =>
      <Square key={i} clickHandler={onClick(i)} />);

const Board = (): React$Element<*> =>
  <div className="board">
    {generateSquares()}
  </div>;

export default Board;
