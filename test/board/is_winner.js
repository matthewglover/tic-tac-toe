// @flow
const test = require('tape');
const { isWinner } = require('../../src/board');

test('isWinner', (t) => {
  t.false(isWinner(0), 'returns false for boardStatus 0');
  t.end();
});

test('isWinner', (t) => {
  t.true(isWinner(1), 'returns true for boardStatus 1');
  t.true(isWinner(2), 'returns true for boardStatus 2');
  t.end();
});
