import { combineEpics } from 'redux-observable';
import move from './move';
import completedGame from './completed_game';

const rootEpic = combineEpics(
  move(500),
  completedGame(500));

export default rootEpic;
