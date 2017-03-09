const test = require('tape');
const React = require('react');
const { mount } = require('enzyme');
const { MemoryRouter } = require('react-router');
const sinon = require('sinon');
const { Provider } = require('react-redux');
const ChooseGameContainer = require('../../src/components/choose_game_container').default;
const GameLink = require('../../src/components/game_link').default;
const { setupDom, provisionStoreFaker, makeState } = require('../../test_helpers');

setupDom();

const dispatch = sinon.spy();
const storeFake = provisionStoreFaker({ dispatch });

const TEXT_LINKS =
  [
    'Human vs Human',
    'Human vs Computer',
    'Computer vs Human',
    'Computer vs Computer',
  ];

test('ChooseGameContainer', (t) => {
  const store = storeFake(makeState({}));

  mount(
    <MemoryRouter>
      <Provider store={store}>
        <ChooseGameContainer />
      </Provider>
    </MemoryRouter>);

  t.true(dispatch.calledOnce);
  t.deepEqual(dispatch.firstCall.args, [{ type: 'RESET' }], 'on mount, dispatches a reset action');
  t.end();
});


test('ChooseGameContainer', (t) => {
  const store = storeFake(makeState({}));

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <ChooseGameContainer />
      </Provider>
    </MemoryRouter>);

  const links = wrapper.find(GameLink);
  t.equal(links.length, 4, 'displays four GameLink components');
  links.forEach((link, i) => {
    t.equal(link.text(), TEXT_LINKS[i], `displays ${TEXT_LINKS[i]} at position ${i}`);
  });
  t.end();
});
