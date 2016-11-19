// @flow
import getOtherPlayer from './get_other_player';
import getNumMoves from './get_num_moves';


const getNextMove = (startPlayer: Player, board: Board): Player => {
  const otherPlayer = getOtherPlayer(startPlayer);
  const startMoves = getNumMoves(startPlayer, board);
  const otherMoves = getNumMoves(otherPlayer, board);

  return startMoves === otherMoves
    ? startPlayer
    : otherPlayer;
};

export default getNextMove;
