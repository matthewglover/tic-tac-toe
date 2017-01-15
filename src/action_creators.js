/* eslint-disable import/prefer-default-export */

export const move = position =>
  ({
    type: 'MOVE',
    position,
  });

export const setNewGame = gameType =>
  ({
    type: 'SET_NEW_GAME',
    gameType,
  });
