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

  t.true(dispatch.calledOnce);
  t.deepEqual(dispatch.firstCall.args, [{ type: 'SET_NEW_GAME', gameType: 'COMPUTER_HUMAN' }]);
  t.true(wrapper.contains(<Board />));
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

  t.true(dispatch.calledOnce);
  t.deepEqual(dispatch.firstCall.args, [{ type: 'SET_NEW_GAME', gameType: 'HUMAN_COMPUTER' }]);
  t.true(wrapper.contains(<Redirect to="/game_over" />));
  t.end();
});
