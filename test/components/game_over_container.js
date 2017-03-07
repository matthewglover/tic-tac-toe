const test = require('tape');
const React = require('react');
const { Provider } = require('react-redux');
const { render, mount } = require('enzyme');
const { MemoryRouter } = require('react-router');
const GameOverContainer = require('../../src/components/game_over_container').default;
const { GameOver } = require('../../src/components/game_over_container');
const { setupDom, provisionStoreFaker, makeState } = require('../../test_helpers');

setupDom();

const storeFake = provisionStoreFaker({});


test('GameOver', (t) => {
  const wrapper = render(
    <MemoryRouter>
      <GameOver winner={0} />
    </MemoryRouter>);
  t.true(/It's a draw/.test(wrapper.text()), 'reports "It\'s a draw" if winner === 0');
  t.end();
});

test('GameOver', (t) => {
  const wrapper = render(
    <MemoryRouter>
      <GameOver winner={1} />
    </MemoryRouter>);
  t.true(/Player 1 wins!/.test(wrapper.text()), 'reports "Player 1 wins!" if winner === 1');
  t.end();
});

test('GameOver', (t) => {
  const wrapper = render(
    <MemoryRouter>
      <GameOver winner={2} />
    </MemoryRouter>);
  t.true(/Player 2 wins!/.test(wrapper.text()), 'reports "Player 2 wins!" if winner === 2');
  t.end();
});

test('GameOverContainer', (t) => {
  const board =
    [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ];

  const store = storeFake(makeState({ board }));

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <GameOverContainer />
      </MemoryRouter>
    </Provider>);
  t.true(/Player 1 wins!/.test(wrapper.text()), 'reports "Player 1 wins!" if winner === 1');
  t.end();
});

test('GameOverContainer', (t) => {
  const board =
    [
      2, 0, 0,
      2, 1, 0,
      2, 0, 1,
    ];

  const store = storeFake(makeState({ board }));

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <GameOverContainer />
      </MemoryRouter>
    </Provider>);
  t.true(/Player 2 wins!/.test(wrapper.text()), 'reports "Player 2 wins!" if winner === 2');
  t.end();
});

test('GameOverContainer', (t) => {
  const board =
    [
      2, 2, 1,
      1, 1, 2,
      2, 1, 1,
    ];

  const store = storeFake(makeState({ board }));

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <GameOverContainer />
      </MemoryRouter>
    </Provider>);
  t.true(/It's a draw/.test(wrapper.text()), 'reports "It\'s a draw" if winner === 0');
  t.end();
});
