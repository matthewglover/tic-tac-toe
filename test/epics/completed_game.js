const test = require('tape');
const { Subject } = require('rxjs/Rx');
const completedGame = require('../../src/epics/completed_game').default;
const { makeState } = require('../../test_helpers');

const noop = () => {};

const fakeStore = state =>
  ({
    getState() { return state; },
  });

const board =
  [
    1, 2, 2,
    0, 1, 0,
    0, 0, 1,
  ];

const doCompletedGame = completedGame(0);

test('completedGame', (t) => {
  const action$ = new Subject();
  const store = fakeStore(makeState({ gameCompleted: false, board }));

  doCompletedGame(action$, store, 0)
    .subscribe(
      (action) => {
        t.deepEqual(action, { type: 'SET_GAME_COMPLETED', completed: true });
        action$.complete();
      },
      noop,
      t.end);

  action$.next({ type: 'MOVE', position: 8 });
});

test('completedGame', (t) => {
  const action$ = new Subject();
  const store = fakeStore(makeState({ gameCompleted: false, board }));

  doCompletedGame(action$, store, 0)
    .subscribe(
      (action) => {
        t.deepEqual(action, { type: 'SET_GAME_COMPLETED', completed: true });
        action$.complete();
      },
      noop,
      t.end);

  action$.next({ type: 'SET_BOARD', board });
});
