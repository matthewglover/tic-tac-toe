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

const isBetterMove =
  (baseScore: number, newScore: number, isMax: boolean): boolean =>
    (isMax
      ? baseScore < newScore
      : baseScore > newScore);


/* eslint-disable no-use-before-define */

const isDeadPath =
  (isMax: boolean, depth: number, alpha: number, beta: number): boolean =>
    (isMax
      ? alpha >= (10 - depth)
      : beta <= (depth - 10));

const provisionBestResultReducer =
  (isMax: boolean, depth: number) =>
    (alphaBetaResult: AlphaBetaResult, newBoard: Board): AlphaBetaResult => {
      const [bestScore, , alpha, beta] = alphaBetaResult;

      if (isDeadPath(isMax, depth, alpha, beta)) {
        return alphaBetaResult;
      }

      const [newScore, , newAlpha, newBeta] =
        alphaBeta(newBoard, !isMax, depth, alpha - 1, beta + 1);

      return isBetterMove(bestScore, newScore, isMax)
        ? [newScore, newBoard, newAlpha, newBeta]
        : alphaBetaResult;
    };

const getBestMove =
  (moves: Array<Board>, isMax: boolean, depth: number,
    alpha: number, beta: number): AlphaBetaResult => {
    const [firstMove, ...otherMoves] = moves;
    const [firstScore, , firstAlpha, firstBeta] =
      alphaBeta(firstMove, !isMax, depth, alpha, beta);
    const bestResultReducer = provisionBestResultReducer(isMax, depth);

    // NOTE: explicitly passing default accumulator is required for Flow type parser
    return otherMoves.reduce(bestResultReducer,
      [firstScore, firstMove, firstAlpha, firstBeta]);
  };

/* eslint-enable no-use-before-define */

const calcAlpha = (isMax: boolean, score: number, crntAlpha: Alpha): Alpha =>
  (isMax && (score > crntAlpha)
    ? score
    : crntAlpha);

const calcBeta = (isMax: boolean, score: number, crntBeta: Beta): Beta =>
  (!isMax && (score < crntBeta)
    ? score
    : crntBeta);

const calcResult =
  (board: Board, isMax: boolean, depth: number,
    alpha:number, beta:number): AlphaBetaResult => {
    const score = getBoardScore(board, isMax, depth);

    return [
      score,
      board,
      calcAlpha(isMax, score, alpha),
      calcBeta(isMax, score, beta)];
  };

/**
 * Get best next move for current player.
 * Returns current board score and board if no more moves.
 */
const alphaBeta =
  (board: Board, isMax: boolean = true, depth: number = 0,
    alpha: Alpha = -10, beta: Beta = 10): AlphaBetaResult => {
    const moves = getNextMoves(board);

    return moves.length === 0
      ? calcResult(board, !isMax, depth, alpha, beta)
      : getBestMove(moves, isMax, depth + 1, alpha, beta);
  };

export default alphaBeta;
