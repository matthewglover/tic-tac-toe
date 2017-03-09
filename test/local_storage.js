const test = require('tape');
const sinon = require('sinon');
const { setupDom, setupLocalStorage } = require('../test_helpers');
const { loadState, saveState, clearState, isErrorState } = require('../src/local_storage');

setupDom();
setupLocalStorage();

const testData = { test: 'It works!' };
const testPayload = JSON.stringify(testData);
const setItemStub = sinon.stub();
const getItemStub = sinon.stub();
const removeItemStub = sinon.stub();


localStorage.getItem = getItemStub;
localStorage.setItem = setItemStub;
localStorage.removeItem = removeItemStub;

const resetStubs = () => {
  setItemStub.reset();
  getItemStub.reset();
  removeItemStub.reset();
};

test('loadState', (t) => {
  resetStubs();
  getItemStub.returns(testPayload);
  t.deepEqual(loadState(), testData, 'Loads state from local storage');
  t.end();
});

test('loadState', (t) => {
  resetStubs();
  getItemStub.returns(null);
  t.equal(loadState(), undefined, 'returns undefined if no state found');
  t.end();
});

test('loadState', (t) => {
  resetStubs();
  const testError = new Error();
  getItemStub.throws(testError);
  t.deepEqual(loadState(), { error: testError }, 'returns { error: ERROR } if error in serializing JSON or accessing localStorage');
  t.end();
});

test('saveState', (t) => {
  resetStubs();
  saveState(testData);
  t.true(setItemStub.called);
  t.equal(setItemStub.lastCall.args[1], testPayload, 'saves the payload to localStorage');
  t.end();
});

test('saveState', (t) => {
  resetStubs();
  const testError = new Error();
  setItemStub.throws(testError);
  saveState(testData);
  t.deepEqual(saveState(), { error: testError }, 'returns { error: ERROR } if error in parsing JSON or accessing localStorage');
  t.end();
});

test('clearState', (t) => {
  resetStubs();
  clearState();
  t.true(removeItemStub.called);
  t.is(removeItemStub.lastCall.args[0], 'state', 'clears item from localStorage');
  t.end();
});

test('clearState', (t) => {
  resetStubs();
  const testError = new Error();
  removeItemStub.throws(testError);
  t.deepEqual(clearState(), { error: testError }, 'returns { error: ERROR } if error in parsing JSON or accessing localStorage');
  t.end();
});

test('isErrorState', (t) => {
  const testError = new Error();
  t.true(isErrorState({ error: testError }), 'returns true if state has property { error: ERROR }');
  t.false(isErrorState({}), 'returns false if state has no property { error: ERROR }');
  t.false(isErrorState(), 'returns false if state is not an object');
  t.end();
});
