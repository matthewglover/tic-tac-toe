import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';

import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */


const store =
  createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(epicMiddleware)));

export default store;
