// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

type SquareValue =
  'X' | 'O' | null

type SquareProps = {
  clickHandler?: Function,
  value: SquareValue,
}

/* eslint-disable jsx-a11y/no-static-element-interactions */

const Square = ({ clickHandler, value }: SquareProps): React$Element<*> =>
  <div className="square" onClick={clickHandler}>{value}</div>;


const convertStatusToValue = (status: ItemStatus): SquareValue => {
  switch (status) {
    case 1: return 'X';
    case 2: return 'O';
    default: return null;
  }
};

const provisionClickHandler = (status, position, action) =>
  (status === 0
    ? () => action(position)
    : undefined);

const mergeProps = ({ board }, { move }, { position }): SquareProps => {
  const status = board[position];
  const value = convertStatusToValue(status);
  const clickHandler = provisionClickHandler(status, position, move);

  return {
    value,
    clickHandler,
  };
};


export default connect(state => state, actionCreators, mergeProps)(Square);
