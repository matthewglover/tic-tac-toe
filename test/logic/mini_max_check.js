const test = require('tape');
const miniMax = require('../../src/logic/mini_max').default;
const { EMPTY_BOARD, isCompleteBoard, getWinningLines, makeMove } = require('../../src/board');


const randomPosition = () => Math.floor(Math.random() * 9);

const getNextBoard = (board) => {
  const [, nextBoard] = miniMax(board);
  return nextBoard;
};


const runGame = board =>
  (isCompleteBoard(board)
    ? board
    : runGame(getNextBoard(board)));


test('miniMax (logic)', (t) => {
  Array.from({ length: 20 }).forEach((_, i) => {
    const startingMove = randomPosition();
    const result = runGame(makeMove(EMPTY_BOARD, 1, startingMove));
    t.equal(getWinningLines(result).length, 0, `Game ${i}, starting move: ${startingMove} - is a draw`);
  });
  t.end();
});
