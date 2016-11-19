// @flow
import getOtherPlayer from './get_other_player';
import getNumMoves from './get_num_moves';


const getNextPlayer = (board: Board, startPlayer: Player): Player => {
  const otherPlayer = getOtherPlayer(startPlayer);
  const startMoves = getNumMoves(board, startPlayer);
  const otherMoves = getNumMoves(board, otherPlayer);

  return startMoves === otherMoves
    ? startPlayer
    : otherPlayer;
};

export default getNextPlayer;
