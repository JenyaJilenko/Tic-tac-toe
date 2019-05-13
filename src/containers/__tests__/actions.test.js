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

describe('Actions', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'error');
    jest.spyOn(console, 'error');
  });

  describe('#movePlayer', () => {
    it(`should creates action with type ${MOVE_PLAYER}`, () => {
      const row = 1;
      const col = 2;

      const expectedAction = {
        type: MOVE_PLAYER,
        payload: {
          row,
          col,
        },
      };

      expect(movePlayer(row, col)).toEqual(expectedAction);
    });
  });

  describe('#stepBack', () => {
    it(`should creates action with type ${STEP_BACK}`, () => {
      const expectedAction = {
        type: STEP_BACK,
      };

      expect(stepBack()).toEqual(expectedAction);
    });
  });

  describe('#stepForward', () => {
    it(`should creates action with type ${STEP_FORWARD}`, () => {
      const expectedAction = {
        type: STEP_FORWARD,
      };

      expect(stepForward()).toEqual(expectedAction);
    });
  });

  describe('#resetGame', () => {
    it(`should creates action with type ${RESET_GAME}`, () => {
      const expectedAction = {
        type: RESET_GAME,
      };

      expect(resetGame()).toEqual(expectedAction);
    });
  });

  describe('#newGame', () => {
    it(`should creates action with type ${NEW_GAME}`, () => {
      const expectedAction = {
        type: NEW_GAME,
      };

      expect(newGame()).toEqual(expectedAction);
    });
  });

  describe('#gameOver', () => {
    it(`should creates action with type ${GAME_OVER}`, () => {
      const expectedAction = {
        type: GAME_OVER,
      };

      expect(gameOver()).toEqual(expectedAction);
    });
  });

  describe('#draw', () => {
    it(`should creates action with type ${DRAW}`, () => {
      const expectedAction = {
        type: DRAW,
      };

      expect(draw()).toEqual(expectedAction);
    });
  });

  describe('#winner', () => {
    it(`should creates action with type ${WINNER}`, () => {
      const player = 1;

      const expectedAction = {
        type: WINNER,
        payload: player,
      };

      expect(winner(player)).toEqual(expectedAction);
    });
  });
});
