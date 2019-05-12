// import { delay } from 'redux-saga';
import {
  put,
  takeEvery,
  select,
  delay,
} from 'redux-saga/effects';

import {
  MOVE_PLAYER,
  winner,
  gameOver,
  draw,
  newGame,
} from './actions';
import { selectSquares, selectPlayer } from './selectors';

import { isWinner, isDraw } from '../utils/game';

/**
 * Check winner.
 */
export function* checkWinnerSaga() {
  const board = yield select(selectSquares);
  const player = yield select(selectPlayer);

  if (isWinner(board, player)) {
    yield put(winner(player));
    yield put(gameOver());

    yield delay(2000);
    yield put(newGame());
  } else if (isDraw(board)) {
    yield put(winner(0));
    yield put(gameOver());
    yield put(draw());

    yield delay(2000);
    yield put(newGame());
  }
}

export default function* boardSaga() {
  yield takeEvery(MOVE_PLAYER, checkWinnerSaga);
}
