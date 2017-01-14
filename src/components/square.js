// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

/* eslint-disable jsx-a11y/no-static-element-interactions */

const SimpleSquare = ({ clickHandler, position }: SquareProps): React$Element<*> =>
  <div className="square" onClick={clickHandler}>{position}</div>;


const mapStateToProps = state => state;

const mergeProps = ({ board }, { move }, { position }) => {
  const value = board[position];

  const clickHandler = (value === 0
    ? () => move(position)
    : undefined);

  return {
    value,
    clickHandler,
  };
};

const Square = connect(mapStateToProps, actionCreators, mergeProps)(SimpleSquare);

export default Square;
