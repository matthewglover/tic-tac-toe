// @flow

export const move = (position: number) =>
  ({
    type: 'MOVE',
    position,
  });

export const setNewGame = (gameType: GameType) =>
  ({
    type: 'SET_NEW_GAME',
    gameType,
  });

export const setBoard = (board: Board) =>
  ({
    type: 'SET_BOARD',
    board,
  });

export const setGameCompleted = (completed: boolean) =>
  ({
    type: 'SET_GAME_COMPLETED',
    completed,
  });


export const reset = () =>
  ({
    type: 'RESET',
  });
