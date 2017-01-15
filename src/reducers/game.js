// @flow

const boardReducer = (game: GameType = null, action: Action): GameType => {
  switch (action.type) {
    case 'SET_NEW_GAME':
      return action.gameType;
    default:
      return game;
  }
};

export default boardReducer;
