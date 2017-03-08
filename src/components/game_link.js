// @flow
import React from 'react';
import { Button } from 'rebass';
import { Link } from 'react-router-dom';

type Props = {
  gameType: GameType,
  description: string,
}

const style = {
  button: {
    width: '200px',
    textAlign: 'center',
  },
};

const GameLink = ({ gameType, description }: Props) =>
  <Button
    to={{
      pathname: '/game',
      query: { gameType },
    }}
    is={Link}
    backgroundColor="white"
    color="LightSlateGray"
    style={style.button}
  >
    {description}
  </Button>;

export default GameLink;
