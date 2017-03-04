// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNewGame } from '../action_creators';
import Board from './board';

type Props = {
  location: {
    query: {
      gameType: GameType,
    },
  },
  dispatch: Function,
  gameCompleted: boolean
}

class Game extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;
    const gameType = this.props.location.query.gameType;

    dispatch(setNewGame(gameType));
  }

  props: Props

  render() {
    return (this.props.gameCompleted
      ? <Redirect to="/game_over" />
      : <Board />);
  }
}

const mapStateToProps = state =>
  ({
    gameCompleted: state.gameCompleted,
  });

export default connect(mapStateToProps)(Game);
