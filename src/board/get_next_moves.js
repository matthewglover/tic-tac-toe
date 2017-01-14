// @flow
import isCompleteBoard from './is_complete_board';
import getFreeSquares from './get_free_squares';
import getNextPlayer from './get_next_player';
import makeMove from './make_move';


/**
 * Get a list of next moves (does not check if game is complete)
 */
const getValidNextMoves = (board: Board, player: Player): Array<Board> =>
  getFreeSquares(board)
    .map(square => makeMove(board, player, square));


/**
 * Get a list of next moves (returns an empty array if the game is complete)
 */
const getNextMoves = (board: Board): Array<Board> =>
  (isCompleteBoard(board)
    ? []
    : getValidNextMoves(board, getNextPlayer(board)));


export default getNextMoves;
