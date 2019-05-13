import { initialState } from '../reducer';
import {
getBoard,
selectSquares,
selectCross,
selectNought,
selectSets,
selectPlayer,
selectGameover,
selectDraw,
} from '../selectors';

describe('Selectors', () => {
  let state;

  beforeEach(() => {
    jest.spyOn(global.console, 'error');
    jest.spyOn(console, 'error');

    state = { board: initialState };
  });

  it('selectSquares', () => {
    let result = selectSquares(state);
    expect(result).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

    const future = [[1, 2, 0], [0, 2, 0], [1, 0, 0]];
    state = {
      board: {
      ...state.board,
      present: future,
      },
    };

    result = selectSquares(state);
    expect(result).toEqual(future);
  });

  it('selectCross', () => {
    let result = selectCross(state);
    expect(result).toEqual(0);

    state = {
      board: {
      ...state.board,
      cross: 4,
      },
    };

    result = selectCross(state);
    expect(result).toEqual(4);
  });

  it('selectNought', () => {
    let result = selectNought(state);
    expect(result).toEqual(0);

    state = {
      board: {
      ...state.board,
      nought: 5,
      },
    };

    result = selectNought(state);
    expect(result).toEqual(5);
  });

  it('selectSets', () => {
    let result = selectSets(state);
    expect(result).toEqual(0);

    state = {
      board: {
      ...state.board,
      sets: 10,
      },
    };

    result = selectSets(state);
    expect(result).toEqual(10);
  });

  it('selectPlayer', () => {
    let result = selectPlayer(state);
    expect(result).toEqual(0);

    state = {
      board: {
      ...state.board,
      player: 1,
      },
    };

    result = selectPlayer(state);
    expect(result).toEqual(1);
  });

  it('selectGameover', () => {
    let result = selectGameover(state);
    expect(result).toEqual(false);

    state = {
      board: {
      ...state.board,
      gameover: true,
      },
    };

    result = selectGameover(state);
    expect(result).toEqual(true);
  });

  it('selectDraw', () => {
    let result = selectDraw(state);
    expect(result).toEqual(false);

    state = {
      board: {
      ...state.board,
      draw: true,
      },
    };

    result = selectDraw(state);
    expect(result).toEqual(true);
  });
});
