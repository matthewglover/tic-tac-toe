const { jsdom } = require('jsdom');
const { LocalStorage } = require('node-localstorage');

const setupDom = () => {
  global.document = jsdom('');
  global.window = document.defaultView;
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  });
  global.navigator = { userAgent: 'node.js' };
};

const identity = x => x;

const provisionStoreFaker = ({ dispatch = identity }) => state =>
  ({
    default() {},
    subscribe() {},
    dispatch,
    getState() { return state; },
  });

const setupLocalStorage = () => {
  global.localStorage = new LocalStorage('');
  global.window.localStorage = global.localStorage;
};


const DEFAULT_BOARD =
  [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];

const DEFAULT_GAME = 'HUMAN_COMPUTER';

const makeState = ({ board = DEFAULT_BOARD, game = DEFAULT_GAME, gameCompleted = false }) =>
  ({
    board,
    game,
    gameCompleted,
  });


module.exports = {
  setupDom,
  provisionStoreFaker,
  makeState,
  setupLocalStorage,
};
