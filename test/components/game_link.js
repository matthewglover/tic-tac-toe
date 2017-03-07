const test = require('tape');
const React = require('react');
const { mount } = require('enzyme');
const { MemoryRouter } = require('react-router');
const { Link } = require('react-router-dom');
const GameLink = require('../../src/components/game_link').default;
const { setupDom } = require('../../test_helpers');

setupDom();

test('GameLink', (t) => {
  const wrapper = mount(
    <MemoryRouter>
      <GameLink gameType="COMPUTER_HUMAN" description="Computer vs Human" />
    </MemoryRouter>);

  const linkProps = wrapper.find(Link).props();
  t.deepEqual(linkProps.to, { pathname: '/game', query: { gameType: 'COMPUTER_HUMAN' } });
  t.equal(linkProps.children, 'Computer vs Human');
  t.end();
});
