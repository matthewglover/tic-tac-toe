// @flow
const test = require('tape');
const mod = require('../../src/board/get_other_player');

const getOtherPlayer = mod.default;

test('getOtherPlayer', (t) => {
  t.equal(getOtherPlayer(1), 2, 'returns 2 with value of 1');
  t.end();
});

test('getOtherPlayer', (t) => {
  t.equal(getOtherPlayer(2), 1, 'returns 1 with value of 2');
  t.end();
});
