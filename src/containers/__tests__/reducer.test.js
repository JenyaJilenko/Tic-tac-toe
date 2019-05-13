import * as R from 'ramda';

import {
  MOVE_PLAYER,
  STEP_BACK,
  STEP_FORWARD,
  RESET_GAME,
  NEW_GAME,
  GAME_OVER,
  DRAW,
  WINNER,
  movePlayer,
  stepBack,
  stepForward,
  resetGame,
  newGame,
  gameOver,
  draw,
  winner,
} from '../actions';

import reducer, { initialState } from '../reducer';

describe('Reducer', () => {
  let state = initialState;

  beforeEach(() => {
    jest.spyOn(global.console, 'error');
    jest.spyOn(console, 'error');
  });

  describe('STEP_BACK', () => {
    it('should do nothing when past array is empty', () => {
      const action = stepBack();
      const resultState = reducer(initialState, action);

      expect(resultState).toEqual(initialState);
    });

    it('should handle STEP_BACK action', () => {
      const action = stepBack();
      state = {
        ...state,
        player: 1,
        present: [[0, 0, 1], [0, 0, 0], [0, 0, 0]],
        past: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      };
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        past: [[0, 0, 0], [0, 0, 0]],
        present: [0, 0, 0],
        future: [[[0, 0, 1], [0, 0, 0], [0, 0, 0]]],
        player: 1,
      });
    });
  });

  describe('STEP_FORWARD', () => {
    it('should do nothing when future array is empty', () => {
      const action = stepForward();
      const resultState = reducer(initialState, action);

      expect(resultState).toEqual(initialState);
    });

    it('should handle STEP_FORWARD action', () => {
      const action = stepForward();
      state = {
        ...initialState,
        player: 2,
        past: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]],
        present: [[0, 1, 0], [0, 0, 0], [0, 0, 0]],
        future: [[[0, 1, 2], [0, 0, 0], [0, 0, 0]]],
      };
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        past: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 1, 0], [0, 0, 0], [0, 0, 0]]],
        present: [[0, 1, 2], [0, 0, 0], [0, 0, 0]],
        future: [],
        player: 2,
      });
    });
  });

  describe('MOVE_PLAYER', () => {
    it('should handle MOVE_PLAYER action when first player makes a move', () => {
      const row = 1;
      const col = 2;

      const action = movePlayer(row, col);
      const resultState = reducer(initialState, action);

      expect(resultState).toEqual({
        ...state,
        past: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]],
        present: [[0, 0, 0], [0, 0, 1], [0, 0, 0]],
        future: [],
        player: 1,
      });
    });

    it('should handle MOVE_PLAYER action when second player makes a move', () => {
      const row = 2;
      const col = 1;

      const action = movePlayer(row, col);
      state = {
        ...state,
        player: 1,
        present: [[0, 0, 0], [0, 0, 1], [0, 0, 0]],
      };
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        past: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 1], [0, 0, 0]]],
        present: [[0, 0, 0], [0, 0, 1], [0, 2, 0]],
        future: [],
        player: 2,
      });
    });
  });

  describe('GAME_OVER', () => {
    it('should handle GAME_OVER action', () => {
      const action = gameOver();
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        sets: state.sets +1,
        gameover: true,
      });
    });
  });

  describe('WINNER', () => {
    it('should do nothing if the beginning of game', () => {
      const action = winner();
      const resultState = reducer(state, action);

      expect(resultState).toEqual(state);
    });

    it('should handle WINNER action when player one wins', () => {
      const action = winner(1);
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        nought: state.nought + 1,
      });
    });

    it('should handle WINNER action when player two wins', () => {
      const action = winner(2);
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        cross: state.cross + 1,
      });
    });
  });

  describe('DRAW', () => {
    it('should handle DRAW action', () => {
      const action = draw();
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        draw: true,
      });
    });
  });

  describe('NEW_GAME', () => {
    it('should handle NEW_GAME action', () => {
      const action = newGame();
      state = {
        ...state,
        draw: true,
        player: 2,
      };
      const resultState = reducer(state, action);

      expect(resultState).toEqual({
        ...state,
        draw: false,
        gameover: false,
        player: 0,
        past: [],
        present: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        future: [],
      });
    });
  });

  describe('RESET_GAME', () => {
    it('should handle RESET_GAME action', () => {
      const action = resetGame();
      const resultState = reducer(state, action);

      expect(resultState).toEqual(initialState);
    });
  });
});
