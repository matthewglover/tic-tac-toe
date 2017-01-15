
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

export const setBoard = board =>
  ({
    type: 'SET_BOARD',
    board,
  });
