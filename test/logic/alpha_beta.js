const test = require('tape');
const mod = require('../../src/logic/alpha_beta');

const alphaBeta = mod.default;

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    2, 1, 2,
    0, 1, 1,
  ];

  t.deepEqual(
    alphaBeta(board).slice(0, 2),
    [
      10,
      [
        2, 1, 2,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 0,
    2, 1, 0,
    2, 0, 1,
  ];

  t.deepEqual(
    alphaBeta(board, 1).slice(0, 2),
    [
      -10,
      [
        2, 1, 0,
        2, 1, 0,
        2, 0, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    2, 1, 1,
    1, 2, 1,
  ];

  t.deepEqual(
    alphaBeta(board, 1).slice(0, 2),
    [
      0,
      [
        2, 1, 2,
        2, 1, 1,
        1, 2, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 0,
    2, 1, 2,
    0, 1, 1,
  ];

  t.deepEqual(
    alphaBeta(board, false).slice(0, 2),
    [
      10,
      [
        2, 1, 0,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    1, 2, 0,
  ];

  t.deepEqual(
    alphaBeta(board, 1, false).slice(0, 2),
    [
      0,
      [
        2, 1, 2,
        1, 2, 1,
        1, 2, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    1, 0, 0,
  ];

  t.deepEqual(
    alphaBeta(board, 2).slice(0, 2),
    [
      9,
      [
        2, 1, 2,
        1, 2, 1,
        1, 0, 2,
      ],
    ],
    'returns winning move if possible (in fewest possible moves)');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    0, 0, 1,
  ];

  t.deepEqual(
    alphaBeta(board, 2).slice(0, 2),
    [
      9,
      [
        2, 1, 2,
        1, 2, 1,
        2, 0, 1,
      ],
    ],
    'returns winning move if possible (in fewest possible moves)');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 0,
    0, 0, 1,
  ];

  t.deepEqual(
    alphaBeta(board, 1).slice(0, 2),
    [
      0,
      [
        2, 1, 2,
        1, 2, 0,
        1, 0, 1,
      ],
    ],
    'returns not losing move if no winning move');
  t.end();
});

test('alphaBeta', (t) => {
  const board = [
    2, 0, 1,
    0, 0, 1,
    0, 0, 0,
  ];

  t.deepEqual(
    alphaBeta(board, 2).slice(0, 2),
    [
      -6,
      [
        2, 0, 1,
        0, 0, 1,
        0, 0, 2,
      ],
    ],
    'returns move to prolong game even where fatal');
  t.end();
});
