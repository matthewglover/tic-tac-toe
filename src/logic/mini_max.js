// @flow
import {
  getBoardStatus,
  getNextMoves,
  getNextPlayer } from '../board';


/**
 * Get the score for the current board:
 * If no winner, return 0
 * If maximising player wins, return postive score (i.e. current player maximising
 * and wins, or current player minimising and loses)
 * If minimising player wins, return negative score
 * Depth is used to favour minimum number of moves
 */
const getBoardScore = (board: Board, isMax: boolean, depth: number): Score => {
  const boardStatus = getBoardStatus(board);
  const player = getNextPlayer(board);

  if (boardStatus === 0) return 0;
  if ((player === boardStatus && isMax) ||
      (player !== boardStatus && !isMax)) return 10 - depth;
  return -10 + depth;
};

/**
 * Checks if a newScore is a better move for the current player:
 * If player is trying to maximise the score, returns true if new score is higher
 * If player is trying to minimise the score, returns true if new score is lower
 */
const isBetterMove = (baseScore: number, newScore: number, isMax: boolean): boolean =>
  (isMax
    ? baseScore < newScore
    : baseScore > newScore);


/* eslint-disable no-use-before-define */

/**
 * Provision a reducer with additional data: current player, isMax and depth.
 * The provisioned reducer reduces over a list of boards and returns the board
 * with the highest score.
 * Where two boards have the same score, returns the first board in the list.
 */
const provisionBestResultReducer =
  (isMax: boolean, depth: number) =>
    ([bestScore, bestBoard]: MiniMaxResult, newBoard: Board): MiniMaxResult => {
      const [newScore] = miniMax(newBoard, !isMax, depth);

      return isBetterMove(bestScore, newScore, isMax)
        ? [newScore, newBoard]
        : [bestScore, bestBoard];
    };

/**
 * Get the best next move for the current player.
 * Assumes there are available moves.
 */
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

/**
 * Get best next move for current player.
 * Returns current board score and board if no more moves.
 */
const miniMax =
  (board: Board, isMax: boolean = true, depth: number = 0): MiniMaxResult => {
    const moves = getNextMoves(board);

    return (moves.length === 0)
      ? [getBoardScore(board, isMax, depth), board]
      : getBestMove(moves, isMax, depth + 1);
  };

export default miniMax;
