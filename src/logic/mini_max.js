// @flow
import {
  getBoardStatus,
  getNextMoves,
  getLastPlayer } from '../board';


const getBoardScore = (board: Board, isMax: boolean, depth: number): Score => {
  const boardStatus = getBoardStatus(board);
  const player = getLastPlayer(board);

  if (boardStatus === 0) return 0;
  if ((player === boardStatus && isMax) ||
      (player !== boardStatus && !isMax)) return 10 - depth;
  return depth - 10;
};

const isBetterMove = (baseScore: number, newScore: number, isMax: boolean): boolean =>
  (isMax
    ? baseScore < newScore
    : baseScore > newScore);


/* eslint-disable no-use-before-define */

const provisionBestResultReducer =
  (isMax: boolean, depth: number) =>
    ([bestScore, bestBoard]: MiniMaxResult, newBoard: Board): MiniMaxResult => {
      const [newScore] = miniMax(newBoard, !isMax, depth);

      return isBetterMove(bestScore, newScore, isMax)
        ? [newScore, newBoard]
        : [bestScore, bestBoard];
    };

const getBestMove =
  (moves: Array<Board>, isMax: boolean, depth: number): MiniMaxResult => {
    const [firstMove, ...otherMoves] = moves;
    const [firstScore] = miniMax(firstMove, !isMax, depth);
    const bestResultReducer =
      provisionBestResultReducer(isMax, depth);

    // NOTE: explicitly passing default accumulator is required for Flow type parser
    return otherMoves.reduce(bestResultReducer, [firstScore, firstMove]);
  };

/* eslint-enable no-use-before-define */

const miniMax =
  (board: Board, isMax: boolean = true, depth: number = 0): MiniMaxResult => {
    const moves = getNextMoves(board);

    return moves.length === 0
      ? [getBoardScore(board, !isMax, depth), board]
      : getBestMove(moves, isMax, depth + 1);
  };

export default miniMax;
