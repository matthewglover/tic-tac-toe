// @flow
const test = require('tape');
const { isEmptySquare } = require('../../src/board');

test('isEmptySquare', (t) => {
  t.true(isEmptySquare(0), 'returns true for squareValue 0');
  t.end();
});

test('isEmptySquare', (t) => {
  t.false(isEmptySquare(1), 'returns false for squareValue 1');
  t.false(isEmptySquare(2), 'returns false for squareValue 2');
  t.end();
});
