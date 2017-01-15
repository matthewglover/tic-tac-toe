// @flow

const boardReducer = (gameType: GameType = null, action: Action): GameType => {
  switch (action.type) {
    case 'SET_NEW_GAME':
      return action.gameType;
    default:
      return gameType;
  }
};

export default boardReducer;

export const getPlayerType = (gameType: GameType, activePlayer: Player) =>
  (gameType === null
    ? null
    : gameType.split('_')[activePlayer - 1]);
