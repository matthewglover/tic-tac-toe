// @flow

/**
 * Get the other player
 */
const getOtherPlayer = (player: Player): Player =>
  (player === 1
    ? 2
    : 1);

export default getOtherPlayer;
