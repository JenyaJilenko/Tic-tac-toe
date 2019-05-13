import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  winner,
  gameOver,
  draw,
  newGame,
} from '../actions';
import {
  selectSquares,
  selectPlayer,
} from '../selectors';
import { checkWinnerSaga } from '../sagas';

describe('sagas', () => {
  describe('checkWinnerSaga', () => {
    it('should dispatch gameOver action if one of the players won', () => {
      const squares = [[1, 0, 0], [0, 1, 2], [0, 2, 1]];
      const player = 1;


      return expectSaga(checkWinnerSaga)
        .provide([
          [matchers.select(selectSquares), squares],
          [matchers.select(selectPlayer), player],

        ])
        .dispatch(winner(player))
        .dispatch(gameOver())
        .delay(2000)
        .dispatch(newGame())
        .silentRun();
    });

    it('should check if there is a winner dispatch winner action', () => {
      const squares = [[1, 0, 0], [0, 1, 2], [0, 2, 1]];
      const player = 1;

      return expectSaga(checkWinnerSaga)
        .provide([
          [matchers.select(selectSquares), squares],
          [matchers.select(selectPlayer), player],
        ])
        .dispatch(winner(player))
        .dispatch(gameOver())
        .delay(2000)
        .dispatch(newGame())
        .silentRun();
    });

    it('should check if there is a draw dispatch draw action', () => {
      const squares = [[1, 2, 1], [1, 2, 2], [2, 1, 1]];

      return expectSaga(checkWinnerSaga)
        .provide([
          [matchers.select(selectSquares), squares],
          [matchers.select(selectPlayer), 1],
        ])
        .dispatch(winner(0))
        .dispatch(gameOver())
        .dispatch(draw())
        .delay(2000)
        .dispatch(newGame())
        .silentRun();
    });
  });
});
