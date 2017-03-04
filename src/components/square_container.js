// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import * as fromReducers from '../reducers';
import { isCompleteBoard, convertSquareToDisplayValue, isEmptySquare } from '../board';

type PropTypes = {
  clickHandler?: Function,
  value: ?SquareDisplayValue,
}

/* eslint-disable jsx-a11y/no-static-element-interactions */

export const Square = ({ clickHandler, value }: PropTypes): React$Element<*> =>
  <div className="square" onClick={clickHandler}>{value}</div>;

const provisionClickHandler = ({ board, squareValue, position, move, isHumanPlayer }) =>
  (isHumanPlayer &&
   isEmptySquare(squareValue) &&
   !isCompleteBoard(board)
    ? () => move(position)
    : undefined);

const mergeProps = (state, { move }, { position }): PropTypes => {
  const board = state.board;
  const squareValue = board[position];
  const value = convertSquareToDisplayValue(squareValue);
  const isHumanPlayer = fromReducers.isHumanPlayer(state);

  const clickHandler =
    provisionClickHandler({ board, squareValue, position, move, isHumanPlayer });

  return {
    value,
    clickHandler,
  };
};


export default connect(state => state, actionCreators, mergeProps)(Square);
