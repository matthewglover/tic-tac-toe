// @flow

const gameReducer = (gameType: ?GameType = null, action: Action): ?GameType => {
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

const getPlayerOne = (gameType: GameType): PlayerType =>
  (/^HUMAN/.test(gameType)
    ? 'HUMAN'
    : 'COMPUTER');

const getPlayerTwo = (gameType: GameType): PlayerType =>
  (/HUMAN$/.test(gameType)
    ? 'HUMAN'
    : 'COMPUTER');

export const getPlayerType = (gameType: ?GameType, activePlayer: Player): ?PlayerType => {
  if (gameType == null) return null;

  return (
    activePlayer === 1
      ? getPlayerOne(gameType)
      : getPlayerTwo(gameType));
};
