import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getBoard = (state) => R.prop('board', state);

export const selectSquares = createSelector(
  getBoard,
  (board) => board.present || [],
);

export const selectCross = createSelector(
  getBoard,
  (board) => board.cross,
);

export const selectNought = createSelector(
  getBoard,
  (board) => board.nought,
);

export const selectSets = createSelector(
  getBoard,
  (board) => board.sets,
);

export const selectPlayer = createSelector(
  getBoard,
  (board) => board.player,
);

export const selectGameover = createSelector(
  getBoard,
  (board) => board.gameover,
);

export const selectDraw = createSelector(
  getBoard,
  (board) => board.draw,
);
