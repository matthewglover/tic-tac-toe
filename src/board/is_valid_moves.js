// @flow
import getOtherPlayer from './get_other_player';
import getNumMoves from './get_num_moves';

const isValidMoves = (playerStart: Player, board: Board): boolean => {
  const startMoves = getNumMoves(playerStart, board);
  const otherMoves = getNumMoves(getOtherPlayer(playerStart), board);

  return (
    startMoves === otherMoves ||
    startMoves === otherMoves + 1);
};

export default isValidMoves;
