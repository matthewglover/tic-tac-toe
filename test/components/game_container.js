const test = require('tape');
const React = require('react');
const { mount } = require('enzyme');
const { MemoryRouter } = require('react-router');
const { Redirect } = require('react-router-dom');
const sinon = require('sinon');
const { Provider } = require('react-redux');
const Board = require('../../src/components/board').default;
const GameContainer = require('../../src/components/game_container').default;
const { setupDom, provisionStoreFaker, makeState } = require('../../test_helpers');

setupDom();

const dispatch = sinon.spy();
const fakeStore = provisionStoreFaker({ dispatch });

test('GameContainer', (t) => {
  dispatch.reset();
  const store = fakeStore(makeState({ gameCompleted: false }));

  const wrapper = mount(
    <Provider store={store}>
      <GameContainer location={{ query: { gameType: 'COMPUTER_HUMAN' } }} />
    </Provider>);

  t.true(dispatch.calledOnce, 'on mount, when location.query != null, dispatches action');
  t.deepEqual(dispatch.firstCall.args, [{ type: 'SET_NEW_GAME', gameType: 'COMPUTER_HUMAN' }], 'action is a SET_NEW_GAME, with gameType set to props.location.query.gameType');
  t.true(wrapper.contains(<Board />), 'given game state of not completed, loads Board component');
  t.end();
});

test('GameContainer', (t) => {
  dispatch.reset();
  const store = fakeStore(makeState({ gameCompleted: true }));

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <GameContainer location={{ query: { gameType: 'HUMAN_COMPUTER' } }} />
      </Provider>
    </MemoryRouter>);

  t.true(dispatch.calledOnce, 'on mount, when location.query != null, dispatches action');
  t.deepEqual(dispatch.firstCall.args, [{ type: 'SET_NEW_GAME', gameType: 'HUMAN_COMPUTER' }], 'action is a SET_NEW_GAME, with gameType set to props.location.query.gameType');
  t.true(wrapper.contains(<Redirect to="/game_over" />), 'given game state of completed, loads Redirect component');
  t.end();
});

test('GameContainer', (t) => {
  dispatch.reset();
  const store = fakeStore(makeState({ gameCompleted: true }));

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <GameContainer location={{ query: null }} />
      </Provider>
    </MemoryRouter>);

  t.false(dispatch.called, 'on mount, when location.query == null, no action dispatched');
  t.true(wrapper.contains(<Redirect to="/game_over" />), 'given game state of not completed, loads Board component');
  t.end();
});
