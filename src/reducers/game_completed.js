// @flow

const gameCompletedReducer = (gameCompleted: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'RESET':
      return false;
    case 'SET_GAME_COMPLETED':
      return action.completed;
    default:
      return gameCompleted;
  }
};

export default gameCompletedReducer;
