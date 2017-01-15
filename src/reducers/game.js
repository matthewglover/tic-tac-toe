// @flow

const gameReducer = (gameType: GameType = null, action: Action): GameType => {
  switch (action.type) {
    case 'RESET':
      return null;
    case 'SET_NEW_GAME':
      return action.gameType;
    default:
      return gameType;
  }
};

export default gameReducer;

export const getPlayerType = (gameType: GameType, activePlayer: Player) =>
  (gameType === null
      ? null
      : gameType.split('_')[activePlayer - 1]);
