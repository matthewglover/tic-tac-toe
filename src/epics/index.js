import { combineEpics } from 'redux-observable';
import move from './move';

const rootEpic = combineEpics(
  move);

export default rootEpic;
