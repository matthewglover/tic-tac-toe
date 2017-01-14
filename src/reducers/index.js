// @flow
import { combineReducers } from 'redux';
import board from './board';

const rootReducer: AppReducer =
  combineReducers({
    board,
  });

export default rootReducer;
