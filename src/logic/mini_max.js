// @flow
import getBoardStatus from '../board/get_board_status';
import getNextMoves from '../board/get_next_moves';
import getOtherPlayer from '../board/get_other_player';


const getBoardScore = (board: Board, player: Player, isMax: boolean, depth: number): Score => {
  const boardStatus = getBoardStatus(board);

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
    const [newScore] = miniMax(newBoard, player, !isMax, depth);

    return isBetterMove(bestScore, newScore, isMax)
      ? [newScore, newBoard]
      : [bestScore, bestBoard];
  };

const getBestMove =
  (moves: Array<Board>, player: Player, isMax: boolean, depth: number): MinMaxResult => {
    const [firstMove, ...otherMoves] = moves;

    // NOTE: explicitly passing default accumulator is required for Flow type parser
    return otherMoves.reduce(
      bestResultReducer(player, isMax, depth + 1),
      [miniMax(firstMove, player, !isMax, depth + 1)[0], firstMove]);
  };
/* eslint-enable no-use-before-define */

const miniMax =
  (board: Board, player: Player, isMax: boolean = true, depth: number = 0): MinMaxResult => {
    const moves = getNextMoves(board);

    return (moves.length === 0)
      ? [getBoardScore(board, player, isMax, depth), board]
      : getBestMove(moves, getOtherPlayer(player), isMax, depth);
  };

export default miniMax;
