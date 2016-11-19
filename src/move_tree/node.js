// @flow
import getOtherPlayer from '../board/get_other_player';
import getNextMoves from '../board/get_next_moves';
import isCompleteBoard from '../board/is_complete_board';

export const createNode = (state: Board, nodes: Array<TreeNode> = []): TreeNode =>
  ({
    state,
    nodes,
  });


export const createTree = (currentState: Board, currentPlayer: Player): TreeNode => {
  const nextPlayer = getOtherPlayer(currentPlayer);
  const nodes =
    isCompleteBoard(currentState)
      ? []
      : getNextMoves(currentState, currentPlayer)
        .map(state => createTree(state, nextPlayer));

  return createNode(currentState, nodes);
};
