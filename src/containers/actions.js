const namespace = 'TICTAC';

export const MOVE_PLAYER = `${namespace}/MOVE_PLAYER`;
export const STEP_BACK = `${namespace}/STEP_BACK`;
export const STEP_FORWARD = `${namespace}/STEP_FORWARD`;
export const RESET_GAME = `${namespace}/RESET_GAME`;
export const GAME_OVER = `${namespace}/GAME_OVER`;
export const NEW_GAME = `${namespace}/NEW_GAME`;
export const WINNER = `${namespace}/WINNER`;
export const DRAW = `${namespace}/DRAW`;

export const movePlayer = (row, col) => ({
  type: MOVE_PLAYER,
  payload: { row, col },
});

export const stepBack = () => ({
  type: STEP_BACK,
});

export const stepForward = () => ({
  type: STEP_FORWARD,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const newGame = () => ({
  type: NEW_GAME,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const draw = () => ({
  type: DRAW,
});

export const winner = (player) => ({
  type: WINNER,
  payload: player,
});
