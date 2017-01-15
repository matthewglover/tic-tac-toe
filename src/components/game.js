// @flow
import React, { Component } from 'react';
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
}

class Game extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;
    const gameType = this.props.location.query.gameType;

    dispatch(setNewGame(gameType));
  }

  props: Props

  render(): React$Element<*> {
    return <Board />;
  }
}

export default connect()(Game);
