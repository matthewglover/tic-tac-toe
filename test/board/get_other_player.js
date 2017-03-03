// @flow
const test = require('tape');
const { getOtherPlayer } = require('../../src/board');


test('getOtherPlayer', (t) => {
  t.equal(getOtherPlayer(1), 2, 'returns 2 with value of 1');
  t.end();
});

test('getOtherPlayer', (t) => {
  t.equal(getOtherPlayer(2), 1, 'returns 1 with value of 2');
  t.end();
});
