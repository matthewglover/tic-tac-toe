// @flow
import React from 'react';
import { Link } from 'react-router';

type Props = {
  gameType: GameType,
  description: string,
}

const GameLink = ({ gameType, description }: Props) =>
  <li>
    <Link
      to={{
        pathname: '/game',
        query: { gameType },
      }}
    >
      {description}
    </Link>
  </li>;

export default GameLink;
