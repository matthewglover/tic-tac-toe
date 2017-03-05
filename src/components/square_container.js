// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import * as fromReducers from '../reducers';
import { isCompleteBoard, convertSquareToDisplayValue, isEmptySquare } from '../board';


export type PropTypes = {
  clickHandler?: Function,
  value: ?SquareDisplayValue,
}


/* eslint-disable jsx-a11y/no-static-element-interactions */
export const Square = ({ clickHandler, value }: PropTypes): React$Element<*> =>
  <div className="square" onClick={clickHandler}>{value}</div>;


const isClickable = (isHumanPlayer: boolean, squareValue: SquareValue, board: Board): boolean =>
  isHumanPlayer &&
  isEmptySquare(squareValue) &&
  !isCompleteBoard(board);


const mergeProps = ({ value, clickable }, { move }): PropTypes => {
  const clickHandler = clickable
    ? move
    : undefined;

  return {
    value,
    clickHandler,
  };
};


const mapStateToProps = (state, { position }) => {
  const board = state.board;
  const squareValue = board[position];
  const value = convertSquareToDisplayValue(squareValue);
  const isHumanPlayer = fromReducers.isHumanPlayer(state);
  const clickable = isClickable(isHumanPlayer, squareValue, board);

  return {
    value,
    clickable,
  };
};

const mapDispatchToProps = (dispatch, { position }) =>
  ({
    move: () => dispatch(actionCreators.move(position)),
  });


const ConnectedSquare =
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(Square);


export default ConnectedSquare;
