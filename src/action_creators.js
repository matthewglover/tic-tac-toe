/* eslint-disable import/prefer-default-export */
import { MOVE } from './constants';

export const move = position =>
  ({
    type: MOVE,
    position,
  });
