
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

export const setGameCompleted = completed =>
  ({
    type: 'SET_GAME_COMPLETED',
    completed,
  });


export const reset = () =>
  ({
    type: 'RESET',
  });
