
export const any = (...predicates) => action =>
  predicates.some(predicate => predicate(action));

export const isMoveAction = action =>
  action.type === 'MOVE';

export const isStartGameAction = action =>
  action.type === 'SET_NEW_GAME';

export const isSetBoardAction = action =>
  action.type === 'SET_BOARD';
