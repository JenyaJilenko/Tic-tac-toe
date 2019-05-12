// @flow
const winningPatterns = [
  // rows
  [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
  [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
  [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
  // crosses
  [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
  [{ r: 0, c: 2 }, { r: 1, c: 1 }, { r: 2, c: 0 }],
  // columns
  [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
  [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
  [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }]
];

export const isWinner = (board: Array<Array<number>>, player: number) => winningPatterns
  .some((pattern) => pattern.every((square) => {
    const { r, c } = square;

    return board[r][c] === player;
  }));

export const isDraw = (board: Array<Array<number>>) => {
  const notDraw = board.some((row) => row.some((col) => col === 0));

  return !notDraw;
};
