// @flow

export const move = (position: number): MoveAction =>
  ({
    type: 'MOVE',
    position,
  });

export const setNewGame = (gameType: GameType): SetNewGameAction =>
  ({
    type: 'SET_NEW_GAME',
    gameType,
  });

export const setBoard = (board: Board): SetBoardAction =>
  ({
    type: 'SET_BOARD',
    board,
  });

export const setGameCompleted = (completed: boolean): SetGameCompletedAction =>
  ({
    type: 'SET_GAME_COMPLETED',
    completed,
  });


export const reset = (): ResetAction =>
  ({
    type: 'RESET',
  });
