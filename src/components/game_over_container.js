import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as fromReducers from '../reducers';
import { isWinner } from '../board';

export type PropTypes = {
  winner: BoardStatus
}

export const GameOver = ({ winner }: PropTypes) =>
  <div>
    {isWinner(winner)
      ? `Player ${winner} wins!`
      : 'It\'s a draw!'}<br />

    <Link to="/">
      Play again
    </Link>
  </div>;

const mapStateToProps = state =>
  ({
    winner: fromReducers.getWinner(state),
  });

export default connect(mapStateToProps)(GameOver);
