// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import * as fromReducers from '../reducers';

type SquareValue =
  'X' | 'O' | null

type Props = {
  clickHandler?: Function,
  value: SquareValue,
}

/* eslint-disable jsx-a11y/no-static-element-interactions */

const Square = ({ clickHandler, value }: Props): React$Element<*> =>
  <div className="square" onClick={clickHandler}>{value}</div>;


const convertStatusToValue = (status: ItemStatus): SquareValue => {
  switch (status) {
    case 1: return 'X';
    case 2: return 'O';
    default: return null;
  }
};

const provisionClickHandler = ({ squareStatus, position, move, isHumanPlayer }) =>
  (isHumanPlayer && squareStatus === 0
    ? () => move(position)
    : undefined);

const mergeProps = (state, { move }, { position }): Props => {
  const squareStatus = state.board[position];
  const value = convertStatusToValue(squareStatus);
  const isHumanPlayer = fromReducers.isHumanPlayer(state);

  const clickHandler = provisionClickHandler({ squareStatus, position, move, isHumanPlayer });

  return {
    value,
    clickHandler,
  };
};


export default connect(state => state, actionCreators, mergeProps)(Square);
