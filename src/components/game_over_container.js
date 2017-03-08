import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rebass';
import { connect } from 'react-redux';
import * as fromReducers from '../reducers';
import { isWinner } from '../board';

export type PropTypes = {
  winner: BoardStatus
}

const style = {
  container: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: '1.6em',
  },
  button: {
    width: '200px',
    textAlign: 'center',
  },
};


export const GameOver = ({ winner }: PropTypes) =>
  <div style={style.container}>
    <div style={style.resultText}>{isWinner(winner)
      ? `Player ${winner} wins!`
      : 'It\'s a draw!'}</div>
    <Button
      to="/"
      is={Link}
      backgroundColor="white"
      color="LightSlateGray"
      style={style.button}
    >
      Play again
    </Button>
  </div>;

const mapStateToProps = state =>
  ({
    winner: fromReducers.getWinner(state),
  });

export default connect(mapStateToProps)(GameOver);
