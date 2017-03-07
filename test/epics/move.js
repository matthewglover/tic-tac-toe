const test = require('tape');
const { Subject } = require('rxjs/Rx');
const move = require('../../src/epics/move').default;
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
    1, 0, 0,
  ];

const board2 =
  [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];

test('completedGame', (t) => {
  const action$ = new Subject();
  const store = fakeStore(makeState({ gameCompleted: false, board, game: 'HUMAN_COMPUTER' }));

  move(action$, store)
    .subscribe(
      (action) => {
        t.equal(action.type, 'SET_BOARD');
        action$.complete();
      },
      noop,
      t.end);

  action$.next({ type: 'MOVE', position: 6 });
});

test('completedGame', (t) => {
  const action$ = new Subject();
  const store = fakeStore(makeState({ gameCompleted: false, board, game: 'COMPUTER_COMPUTER' }));

  move(action$, store)
    .subscribe(
      (action) => {
        t.equal(action.type, 'SET_BOARD');
        action$.complete();
      },
      noop,
      t.end);

  action$.next({ type: 'SET_BOARD', board });
});


test('completedGame', (t) => {
  const action$ = new Subject();
  const store = fakeStore(makeState({ gameCompleted: false, board: board2, game: 'COMPUTER_HUMAN' }));

  move(action$, store)
    .subscribe(
      (action) => {
        t.equal(action.type, 'SET_BOARD');
        action$.complete();
      },
      noop,
      t.end);

  action$.next({ type: 'SET_NEW_GAME', gameType: 'COMPUTER_HUMAN' });
});
