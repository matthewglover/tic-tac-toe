// @flow

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

type SquareProps = {
  clickHandler?: Function,
};


const Square = ({ clickHandler }: SquareProps): React$Element<*> =>
  <div className="square" onClick={clickHandler}>x</div>;

export default Square;
