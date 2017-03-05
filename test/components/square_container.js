const test = require('tape');
const React = require('react');
const sinon = require('sinon');
const { Provider } = require('react-redux');
const { mount, shallow } = require('enzyme');
const SquareContainer = require('../../src/components/square_container').default;
const { Square } = require('../../src/components/square_container');
const { setupDom, provisionStoreFaker, makeState } = require('../../test_helpers');

setupDom();

const dispatch = sinon.spy();
const storeFake = provisionStoreFaker({ dispatch });

const boardA =
  [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];

const boardB =
  [
    0, 0, 0,
    1, 0, 0,
    0, 0, 0,
  ];

const boardC =
  [
    0, 0, 0,
    2, 0, 0,
    0, 0, 0,
  ];

test('Square', (t) => {
  const wrapper = shallow(<Square />);
  t.equal(wrapper.html(), '<div class="square"></div>', 'returns an empty square by default');
  t.end();
});

test('Square', (t) => {
  const wrapper = shallow(<Square value={null} />);
  t.equal(wrapper.html(), '<div class="square"></div>', 'returns an empty square given prop value of null');
  t.end();
});

test('Square', (t) => {
  const wrapper = shallow(<Square value="X" />);
  t.equal(wrapper.html(), '<div class="square">X</div>', 'returns a square X, given prop value of X');
  t.end();
});

test('Square', (t) => {
  const wrapper = shallow(<Square value="O" />);
  t.equal(wrapper.html(), '<div class="square">O</div>', 'returns a square O, given prop value of O');
  t.end();
});

test('Square', (t) => {
  const clickHandler = sinon.spy();
  const wrapper = shallow(<Square value="O" clickHandler={clickHandler} />);
  wrapper.simulate('click');
  t.true(clickHandler.calledOnce, 'clickHandler called onClick');
  t.end();
});

test('SquareContainer (empty board state)', (t) => {
  dispatch.reset();
  const store = storeFake(makeState({ board: boardA }));

  const wrapper =
    mount(<Provider store={store}>
      <SquareContainer position={3} />
    </Provider>);

  wrapper.simulate('click');
  t.equal(wrapper.html(), '<div class="square"></div>', 'displays empty if square value is 0');
  t.equal(typeof wrapper.find(Square).props().clickHandler, 'function', 'clickHandler set if square value is 0');
  t.true(dispatch.calledOnce, 'click handler active on empty squares');
  t.deepEqual(dispatch.firstCall.args, [{ type: 'MOVE', position: 3 }], 'click handler calls dispatch with MOVE action');
  t.end();
});

test('SquareContainer (Square set to 1)', (t) => {
  const store = storeFake(makeState({ board: boardB }));

  const wrapper =
    mount(<Provider store={store}>
      <SquareContainer position={3} />
    </Provider>);

  t.equal(wrapper.html(), '<div class="square">X</div>', 'displays X if square value is 1');
  t.equal(wrapper.props().clickHandler, undefined, 'no clickHandler if square value is 1');
  t.end();
});

test('SquareContainer (Square set to 0, player computer)', (t) => {
  const store = storeFake(makeState({ board: boardB }));

  const wrapper =
    mount(<Provider store={store}>
      <SquareContainer position={4} />
    </Provider>);

  t.equal(wrapper.html(), '<div class="square"></div>', 'displays empty if square value is 0');
  t.equal(wrapper.props().clickHandler, undefined, 'no clickHandler if player is computer');
  t.end();
});

test('SquareContainer', (t) => {
  const store = storeFake(makeState({ board: boardC }));

  const wrapper =
    mount(<Provider store={store}>
      <SquareContainer position={3} />
    </Provider>);

  t.equal(wrapper.html(), '<div class="square">O</div>', 'displays O if square value is 2');
  t.end();
});
