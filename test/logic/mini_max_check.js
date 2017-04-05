const test = require('tape');
const miniMax = require('../../src/logic/mini_max').default;
const alphaBeta = require('../../src/logic/alpha_beta').default;
const { EMPTY_BOARD, isCompleteBoard, getWinningLines, makeMove } = require('../../src/board');

const getNextBoard = (fn, board) => {
  const [, nextBoard] = fn(board);
  return nextBoard;
};


const runGame = (fn, board) =>
  (isCompleteBoard(board)
    ? board
    : runGame(fn, getNextBoard(fn, board)));


test('miniMax (logic)', (t) => {
  Array.from({ length: 9 }).forEach((_, i) => {
    const result = runGame(miniMax, makeMove(EMPTY_BOARD, 1, i));
    t.equal(getWinningLines(result).length, 0, `Game ${i}, starting move: ${i} - is a draw`);
  });
  t.end();
});

test('alphaBeta (logic)', (t) => {
  Array.from({ length: 9 }).forEach((_, i) => {
    const result = runGame(alphaBeta, makeMove(EMPTY_BOARD, 1, i));
    t.equal(getWinningLines(result).length, 0, `Game ${i}, starting move: ${i} - is a draw`);
  });
  t.end();
});
