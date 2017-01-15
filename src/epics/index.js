import { combineEpics } from 'redux-observable';
import move from './move';
import completedGame from './completed_game';

const rootEpic = combineEpics(
  move,
  completedGame);

export default rootEpic;
