// @flow
import getBoardStatus from '../board/get_board_status';
import getNextMoves from '../board/get_next_moves';
import getNextPlayer from '../board/get_next_player';


const getBoardScore = (board: Board, isMax: boolean, depth: number): Score => {
  const boardStatus = getBoardStatus(board);
  const player = getNextPlayer(board);

  if (boardStatus === 0) return 0;
  if (player === boardStatus && isMax) return 10 - depth;
  if (player !== boardStatus && !isMax) return 10 - depth;
  return -10 + depth;
};

const isBetterMove = (baseScore, newScore, isMax) =>
  (isMax
    ? baseScore < newScore
    : baseScore > newScore);


/* eslint-disable no-use-before-define */
const bestResultReducer =
  (player: Player, isMax: boolean, depth: number) =>
  ([bestScore, bestBoard]: MinMaxResult, newBoard: Board): MinMaxResult => {
    const [newScore] = miniMax(newBoard, !isMax, depth);

    return isBetterMove(bestScore, newScore, isMax)
      ? [newScore, newBoard]
      : [bestScore, bestBoard];
  };

const getBestMove =
  (moves: Array<Board>, isMax: boolean, depth: number): MinMaxResult => {
    const [firstMove, ...otherMoves] = moves;
    const player = getNextPlayer(firstMove);

    // NOTE: explicitly passing default accumulator is required for Flow type parser
    return otherMoves.reduce(
      bestResultReducer(player, isMax, depth + 1),
      [miniMax(firstMove, !isMax, depth + 1)[0], firstMove]);
  };
/* eslint-enable no-use-before-define */

const miniMax =
  (board: Board, isMax: boolean = true, depth: number = 0): MinMaxResult => {
    const moves = getNextMoves(board);

    return (moves.length === 0)
      ? [getBoardScore(board, isMax, depth), board]
      : getBestMove(moves, isMax, depth);
  };

export default miniMax;
