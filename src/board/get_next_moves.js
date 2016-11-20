// @flow
import isCompleteBoard from './is_complete_board';
import getFreeSquares from './get_free_squares';
import makeMove from './make_move';


const getValidNextMoves = (board: Board, player: Player): Array<Board> =>
  getFreeSquares(board)
    .map(square => makeMove(board, player, square));

const getNextMoves = (board: Board, player: Player): Array<Board> =>
  (isCompleteBoard(board)
    ? []
    : getValidNextMoves(board, player));


export default getNextMoves;
