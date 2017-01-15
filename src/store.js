import { createStore } from 'redux';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const devToolsEnhancer =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => {};
/* eslint-enable */

const store = createStore(rootReducer, {}, devToolsEnhancer);

export default store;
