
const gameCompletedReducer = (gameCompleted: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'SET_GAME_COMPLETED':
      return action.completed;
    default:
      return gameCompleted;
  }
};

export default gameCompletedReducer;
