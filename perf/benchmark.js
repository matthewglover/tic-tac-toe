/* eslint-disable no-console, import/no-extraneous-dependencies */
import Benchmark from 'benchmark';
import alphaBeta from '../src/logic/alpha_beta';
import miniMax from '../src/logic/mini_max';

const board = [
  1, 0, 0,
  0, 0, 0,
  0, 2, 0,
];

const suite = new Benchmark.Suite();

suite
  .add('alphaBeta', () => alphaBeta(board))
  .add('miniMax', () => miniMax(board))
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
  })
  .run({ async: true });
