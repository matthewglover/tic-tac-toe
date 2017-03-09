// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNewGame } from '../action_creators';
import Board from './board';


type LocationQuery = {
  gameType: GameType,
};

type Props = {
  location: {
    query: ?LocationQuery,
  },
  dispatch: Function,
  gameCompleted: boolean
}

class Game extends Component {

  componentDidMount() {
    if (this.props.location.query == null) return;
    const gameType = this.props.location.query.gameType;
    this.props.dispatch(setNewGame(gameType));
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
