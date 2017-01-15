// @flow
import React from 'react';
import GameLink from './game_link';

const GAME_LINKS = [
  { gameType: 'HUMAN_HUMAN', description: 'Human vs Human' },
  { gameType: 'HUMAN_COMPUTER', description: 'Human vs Computer' },
  { gameType: 'COMPUTER_HUMAN', description: 'Computer vs Human' },
  { gameType: 'COMPUTER_COMPUTER', description: 'Computer vs Computer' },
];

const ChooseGame = () =>
  <div>Choose a game

    <ul>
      {GAME_LINKS.map((props, i) =>
        <GameLink key={i} {...props} />)}
    </ul>
  </div>;

export default ChooseGame;
