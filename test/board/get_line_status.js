// @flow
const test = require('tape');
const { getLineStatus } = require('../../src/board');


test('getLineStatus', (t) => {
  t.equal(
    getLineStatus([1, 1, 1]),
    1,
    'returns 1 if Player 1 has winning line');
  t.end();
});

test('getLineStatus', (t) => {
  t.equal(
    getLineStatus([2, 2, 2]),
    2,
    'returns 2 if Player 2 has winning line');
  t.end();
});

test('getLineStatus', (t) => {
  t.equal(
    getLineStatus([1, 0, 2]),
    0,
    'returns 0 if neither Player has winning line');
  t.end();
});

test('getLineStatus', (t) => {
  t.equal(
    getLineStatus([0, 0, 0]),
    0,
    'returns 0 if neither Player has winning line');
  t.end();
});
