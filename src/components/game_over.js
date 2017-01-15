import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as fromReducers from '../reducers';

type PropTypes = {
  winner: ItemStatus
}

const GameOver = ({ winner }: PropTypes) =>
  <div>
    {winner === 0
      ? 'It\'s a draw!'
      : `Player ${winner} wins!`}<br />

    <Link to="/">
      Play again
    </Link>
  </div>;

const mapStateToProps = state =>
  ({
    winner: fromReducers.getWinner(state),
  });

export default connect(mapStateToProps)(GameOver);