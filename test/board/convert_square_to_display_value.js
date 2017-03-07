const test = require('tape');
const { convertSquareToDisplayValue } = require('../../src/board');

test('convertSquareToDisplayValue', (t) => {
  t.equal(convertSquareToDisplayValue(0), null, 'given value of 0, returns null');
  t.end();
});

test('convertSquareToDisplayValue', (t) => {
  t.equal(convertSquareToDisplayValue(1), 'X', 'given value of 1, returns X');
  t.end();
});

test('convertSquareToDisplayValue', (t) => {
  t.equal(convertSquareToDisplayValue(2), 'O', 'given value of 2, returns O');
  t.end();
});
