// @flow
import getFreeSquares from './get_free_squares';
import makeMove from './make_move';

const getNextMoves = (board: Board, player: Player): Array<Board> =>
  getFreeSquares(board)
  .map(square => makeMove(board, player, square));


export default getNextMoves;
