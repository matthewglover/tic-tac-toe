// @flow
import getOtherPlayer from './get_other_player';
import getNumMoves from './get_num_moves';

const isValidMoves = (board: Board, playerStart: Player): boolean => {
  const startMoves = getNumMoves(board, playerStart);
  const otherMoves = getNumMoves(board, getOtherPlayer(playerStart));

  return (
    startMoves === otherMoves ||
    startMoves === otherMoves + 1);
};

export default isValidMoves;
