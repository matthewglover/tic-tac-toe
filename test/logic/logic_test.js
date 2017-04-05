const test = require('tape');
const miniMax = require('../../src/logic/mini_max').default;
const alphaBeta = require('../../src/logic/alpha_beta').default;

const ALGORITHMS = [
  ['miniMax', miniMax],
  ['alphaBeta', alphaBeta]];

const ASSERTIONS = [
  {
    board: [
      2, 1, 2,
      2, 1, 2,
      0, 1, 1,
    ],
    result: [
      10,
      [
        2, 1, 2,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    message: 'returns correct score and state if complete',
  },
  {
    board: [
      2, 1, 0,
      2, 1, 0,
      2, 0, 1,
    ],
    result: [
      -10,
      [
        2, 1, 0,
        2, 1, 0,
        2, 0, 1,
      ],
    ],
    message: 'returns correct score and state if complete',
  },
  {
    board: [
      2, 1, 2,
      2, 1, 1,
      1, 2, 1,
    ],
    result: [
      0,
      [
        2, 1, 2,
        2, 1, 1,
        1, 2, 1,
      ],
    ],
    message: 'returns correct score and state if complete',
  },
  {
    board: [
      2, 1, 0,
      2, 1, 2,
      0, 1, 1,
    ],
    result: [
      -10,
      [
        2, 1, 0,
        2, 1, 2,
        0, 1, 1,
      ],
    ],
    message: 'returns correct score and state if complete',
  },
  {
    board: [
      2, 1, 2,
      1, 2, 1,
      1, 2, 0,
    ],
    result: [
      0,
      [
        2, 1, 2,
        1, 2, 1,
        1, 2, 1,
      ],
    ],
    message: 'returns correct score and state if complete',
  },
  {
    board: [
      2, 1, 2,
      1, 2, 1,
      1, 0, 0,
    ],
    result: [
      9,
      [
        2, 1, 2,
        1, 2, 1,
        1, 0, 2,
      ],
    ],
    message: 'returns winning move if possible (in fewest possible moves)',
  },
  {
    board: [
      2, 1, 2,
      1, 2, 1,
      0, 0, 1,
    ],
    result: [
      9,
      [
        2, 1, 2,
        1, 2, 1,
        2, 0, 1,
      ],
    ],
    message: 'returns winning move if possible (in fewest possible moves)',
  },
  {
    board: [
      2, 1, 2,
      1, 2, 0,
      0, 0, 1,
    ],
    result: [
      0,
      [
        2, 1, 2,
        1, 2, 0,
        1, 0, 1,
      ],
    ],
    message: 'returns not losing move if no winning move',
  },
  {
    board: [
      2, 0, 1,
      0, 0, 1,
      0, 0, 0,
    ],
    result: [
      -6,
      [
        2, 0, 1,
        0, 0, 1,
        0, 0, 2,
      ],
    ],
    message: 'returns move to prolong game even where fatal',
  },
];

function runTest([name, fn], { board, result, message }) {
  test(`Algorithms (${name})`, (t) => {
    t.deepEqual(
      fn(board, 2).slice(0, 2),
      result,
      message);
    t.end();
  });
}

function runAlgorithms(assertion) {
  ALGORITHMS.forEach(algorithm => runTest(algorithm, assertion));
}

ASSERTIONS.forEach(runAlgorithms);
