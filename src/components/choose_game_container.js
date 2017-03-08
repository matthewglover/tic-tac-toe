// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameLink from './game_link';
import * as fromActionCreators from '../action_creators';


type PropTypes = {
  dispatch: Function
}

const GAME_LINKS = [
  { gameType: 'HUMAN_HUMAN', description: 'Human vs Human' },
  { gameType: 'HUMAN_COMPUTER', description: 'Human vs Computer' },
  { gameType: 'COMPUTER_HUMAN', description: 'Computer vs Human' },
  { gameType: 'COMPUTER_COMPUTER', description: 'Computer vs Computer' },
];

const style = {
  container: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export class ChooseGame extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;

    dispatch(fromActionCreators.reset());
  }

  props: PropTypes

  render() {
    return (
      <div style={style.container}>
        {GAME_LINKS.map((props, i) =>
          <GameLink key={i} {...props} />)}
      </div>);
  }
}

export default connect()(ChooseGame);
