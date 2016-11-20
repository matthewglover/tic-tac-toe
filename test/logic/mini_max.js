const test = require('tape');
const mod = require('../../src/logic/mini_max');

const miniMax = mod.default;

test('miniMax', (t) => {
  const board = [
    2, 1, 1,
    2, 1, 2,
    0, 1, 1,
  ];

  t.deepEqual(
    miniMax(board, 1),
    [
      10,
      [
        2, 1, 1,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('miniMax', (t) => {
  const board = [
    2, 1, 1,
    2, 1, 0,
    2, 0, 1,
  ];

  t.deepEqual(
    miniMax(board, 1),
    [
      -10,
      [
        2, 1, 1,
        2, 1, 0,
        2, 0, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('miniMax', (t) => {
  const board = [
    2, 1, 2,
    2, 1, 1,
    1, 2, 1,
  ];

  t.deepEqual(
    miniMax(board, 1),
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

test('miniMax', (t) => {
  const board = [
    2, 1, 1,
    2, 1, 2,
    0, 1, 1,
  ];

  t.deepEqual(
    miniMax(board, 2, false),
    [
      10,
      [
        2, 1, 1,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    'returns correct score and state if complete');
  t.end();
});

test('miniMax', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    1, 2, 0,
  ];

  t.deepEqual(
    miniMax(board, 1, false),
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

test('miniMax', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    1, 0, 0,
  ];

  t.deepEqual(
    miniMax(board, 2),
    [
      10,
      [
        2, 1, 2,
        1, 2, 1,
        1, 0, 2,
      ],
    ],
    'returns winning move if possible');
  t.end();
});

test('miniMax', (t) => {
  const board = [
    2, 1, 2,
    1, 2, 1,
    0, 0, 1,
  ];

  t.deepEqual(
    miniMax(board, 2),
    [
      10,
      [
        2, 1, 2,
        1, 2, 1,
        2, 0, 1,
      ],
    ],
    'returns winning move if possible');
  t.end();
});
