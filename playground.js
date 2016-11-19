import { createTree } from './src/move_tree/node';

const board = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

const start = Date.now();

createTree(board, 1);

// eslint-disable-next-line
console.log('Running time (ms):', Date.now() - start);
