import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { loadState, saveState, isErrorState } from './local_storage';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);


/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */


const getPersistedState = (): Object => {
  const state = loadState();

  return isErrorState(state) || state === undefined
    ? {}
    : state;
};


const saveStateToLocalStorage = (state) => {
  saveState(state);
};


const store =
  createStore(
    rootReducer,
    getPersistedState(),
    composeEnhancers(applyMiddleware(epicMiddleware)));


store.subscribe(() => saveStateToLocalStorage(store.getState()));


export default store;
