// @flow

const EMPTY_BOARD =
  Array.from({ length: 9 }, () => 0);

const boardReducer = (state: Board = EMPTY_BOARD, action: Action): Board => {
  switch (action.type) {
    case 'move':
      console.log('moving: ', action.boardPosition);  // eslint-disable-line no-console
      return state;
    default:
      return state;
  }
};

export default boardReducer;
