const test = require('tape');
const miniMax = require('../../src/logic/mini_max').default;
const { EMPTY_BOARD, isCompleteBoard, getWinningLines, makeMove } = require('../../src/board');

const getNextBoard = (board) => {
  const [, nextBoard] = miniMax(board);
  return nextBoard;
};


const runGame = board =>
  (isCompleteBoard(board)
    ? board
    : runGame(getNextBoard(board)));


test('miniMax (logic)', (t) => {
  Array.from({ length: 9 }).forEach((_, i) => {
    const result = runGame(makeMove(EMPTY_BOARD, 1, i));
    t.equal(getWinningLines(result).length, 0, `Game ${i}, starting move: ${i} - is a draw`);
  });
  t.end();
});
