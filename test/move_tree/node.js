// @flow
const test = require('tape');
const mod = require('../../src/move_tree/node.js');

const { createNode, createTree } = mod;

const startBoard = [
  1, 1, 2,
  0, 2, 0,
  1, 2, 2,
];

const stateTree =
  {
    state: startBoard,
    nodes: [
      {
        state: [
          1, 1, 2,
          1, 2, 0,
          1, 2, 2,
        ],
        nodes: [],
      },
      {
        state: [
          1, 1, 2,
          0, 2, 1,
          1, 2, 2,
        ],
        nodes: [
          {
            state: [
              1, 1, 2,
              2, 2, 1,
              1, 2, 2,
            ],
            nodes: [],
          },
        ],
      },
    ],
  };

test('createNode', (t) => {
  const node = createNode(startBoard);
  t.deepEqual(
    node,
    {
      state: startBoard,
      nodes: [],
    },
    'returns node object');
  t.end();
});

test('createTree', (t) => {
  const tree = createTree(startBoard, 1);
  t.deepEqual(
    tree,
    stateTree,
    'returns tree of all possible moves');
  t.end();
});

test.skip('createTree', (t) => {
  const tree = createTree([
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ], 1);
  t.true(
    tree instanceof Object,
    '(recursion check)');
  t.end();
});
