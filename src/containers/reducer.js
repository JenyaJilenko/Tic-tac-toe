// @flow
import * as R from 'ramda';

import {
  MOVE_PLAYER,
  STEP_BACK,
  STEP_FORWARD,
  RESET_GAME,
  GAME_OVER,
  NEW_GAME,
  WINNER,
  DRAW,
} from './actions';

export const STATE_KEY = 'board';

export const initialState = {
  past: [],
  present: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  future: [],
  nought: 0,
  cross: 0,
  sets: 0,
  player: 0,
  gameover: false,
  draw: false,
};

const BoardReducer = (state: Object = initialState, action: Object) => {
  const {
    past,
    present,
    future,
    sets,
    player,
    nought,
    cross,
  } = state;

  switch (action.type) {
    case STEP_BACK: {
      if (R.length(past) === 0) {
        return state;
      }

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return R.compose(
        R.assoc('past', newPast),
        R.assoc('present', previous),
        R.assoc('future', [present, ...future]),
      )(state);
    }
    case STEP_FORWARD: {
      if (R.length(future) === 0) {
        return state;
      }

      const next = R.head(future);
      const newFuture = future.slice(1);

      return R.compose(
        R.assoc('past', [...past, present]),
        R.assoc('present', next),
        R.assoc('future', newFuture),
      )(state);
    }
    case MOVE_PLAYER: {
      const row = R.path(['payload', 'row'], action);
      const col = R.path(['payload', 'col'], action);
      const nextPlayer = player === 1 ? 2 : 1;

      let newPresent = R.map((arr) => arr.slice())(present);

      if (R.length(past) % 2 !== 0) {
        newPresent[row][col] = 2;
      } else {
        newPresent[row][col] = 1;
      }

      return R.compose(
        R.assoc('past', [...past, present]),
        R.assoc('present', newPresent),
        R.assoc('future', []),
        R.assoc('player', nextPlayer),
      )(state);
    }
    case GAME_OVER: {
      return R.compose(
        R.assoc('sets', sets + 1),
        R.assoc('gameover', true),
      )(state);
    }
    case WINNER: {
      const winner = R.prop('payload', action);
      let noughtWin;
      let crossWin;

      if (winner === 1) {
        noughtWin = nought + 1;
        crossWin = cross;
      } else if (winner === 2) {
        noughtWin = nought;
        crossWin = cross + 1;
      } else {
        return state;
      }

      return R.compose(
        R.assoc('nought', noughtWin),
        R.assoc('cross', crossWin),
      )(state);
    }
    case DRAW: {
      return R.assoc('draw', true, state);
    }
    case NEW_GAME: {
      return R.compose(
        R.assoc('draw', false),
        R.assoc('gameover', false),
        R.assoc('player', 0),
        R.assoc('past', []),
        R.assoc('present', [[0, 0, 0], [0, 0, 0], [0, 0, 0]]),
        R.assoc('future', []),
      )(state);
    }
    case RESET_GAME: {
      return initialState;
    }
    default:
      return state;
  }
};

export default BoardReducer;
