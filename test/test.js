const test = require('tape');
const add = require('../src/add');

test('add - sum two numbers', (t) => {
  t.equal(add(2, 3), 5);
  t.end();
});
