const test = require('tape');
const React = require('react');
const { Provider } = require('react-redux');
const { mount } = require('enzyme');
const Board = require('../../src/components/board').default;
const { Square } = require('../../src/components/square_container');
const { setupDom, provisionStoreFaker, makeState } = require('../../test_helpers');

setupDom();

const storeFake = provisionStoreFaker({});


test('Board', (t) => {
  const board =
    [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ];

  const store = storeFake(makeState({ board }));

  const wrapper = mount(
    <Provider store={store}>
      <Board />
    </Provider>);

  const squares = wrapper.find(Square);

  squares.forEach((square) => {
    t.true(square.matchesElement(<Square value={null} />), 'given empty board state, square has value of null');
  });

  t.end();
});


test('Board', (t) => {
  const board =
    [
      0, 0, 0,
      0, 0, 1,
      0, 2, 0,
    ];

  const store = storeFake(makeState({ board }));

  const wrapper = mount(
    <Provider store={store}>
      <Board />
    </Provider>);

  const squares = wrapper.find(Square);

  t.equal(squares.at(5).props().value, 'X', 'square at position Left Center has value of X');
  t.equal(squares.at(7).props().value, 'O', 'square at position Middle Bottom has value of O');

  t.end();
});
