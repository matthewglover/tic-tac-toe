import * as fromReducer from '../reducers';
import miniMax from '../logic/mini_max';
import * as fromActionCreators from '../action_creators';

const getNextBoard = store => () => {
  const { board } = store.getState();
  const [, nextBoard] = miniMax(board);
  return nextBoard;
};

const isMoveAction = action =>
  action.type === 'MOVE';

const getActivePlayerType = store => () =>
  fromReducer.getActivePlayerType(store.getState());

const isComputerPlayer = playerType =>
  playerType === 'COMPUTER';


const move = (action$, store) =>
  action$
    .filter(isMoveAction)
    .map(getActivePlayerType(store))
    .filter(isComputerPlayer)
    .map(getNextBoard(store))
    .map(fromActionCreators.setBoard);

export default move;
