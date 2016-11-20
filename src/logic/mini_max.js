// @flow
import getBoardStatus from '../board/get_board_status';
import getNextMoves from '../board/get_next_moves';
import getOtherPlayer from '../board/get_other_player';

type Score = number;
type MinMaxResult = [Score, Board];


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

const miniMax =
  (board: Board, player: Player, isMax: boolean = true, depth: number = 0): MinMaxResult => {
    const possibleMoves = getNextMoves(board, player);

    if (possibleMoves.length === 0) {
      return [getBoardScore(board, player, isMax, depth), board];
    }

    const otherPlayer = getOtherPlayer(player);
    const [head, ...tail] = possibleMoves;

    // NOTE: explicitly passing default accumulator is required for Flow type parser
    return tail.reduce(
      (acc, nextBoard) => {
        const result = miniMax(nextBoard, otherPlayer, !isMax, depth + 1);

        return isBetterMove(acc[0], result[0], isMax)
          ? [result[0], nextBoard]
          : acc;
      },
      [miniMax(head, otherPlayer, !isMax, depth + 1)[0], head]
    );
  };

export default miniMax;
