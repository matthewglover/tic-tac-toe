// @flow
import getBoardStatus from '../board/get_board_status';
import getNextMoves from '../board/get_next_moves';
import getOtherPlayer from '../board/get_other_player';

type Score = 10 | 0 | -10;
type MinMaxResult = [Score, Board];


const getBoardScore = (board: Board, player: Player, isMax: boolean): Score => {
  const boardStatus = getBoardStatus(board);

  if (boardStatus === 0) return 0;
  if (player === boardStatus && isMax) return 10;
  if (player !== boardStatus && !isMax) return 10;
  return -10;
};

const miniMax = (board: Board, player: Player, isMax: boolean = true): MinMaxResult => {
  const possibleMoves = getNextMoves(board, player);

  if (possibleMoves.length === 0) {
    return [getBoardScore(board, player, isMax), board];
  }

  const otherPlayer = getOtherPlayer(player);
  const [head, ...tail] = possibleMoves;

  // NOTE: explicitly passing default accumulator is required for Flow type parser
  return tail.reduce(
    (acc, nextBoard) => {
      const result = miniMax(nextBoard, otherPlayer, !isMax);
      return acc[0] < result[0]
        ? [result[0], nextBoard]
        : acc;
    },
    [miniMax(head, otherPlayer, !isMax)[0], head]
  );
};

export default miniMax;
