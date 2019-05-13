import React from 'react';

import { initialState } from '../../reducer';
import {
  MOVE_PLAYER,
  STEP_BACK,
  STEP_FORWARD,
  RESET_GAME,
} from '../../actions';

import { mapStateToProps, mapDispatchToProps } from '../';

describe('TicTac', () => {
  it('should show last board state', () => {
    const state = {
      board: initialState,
    };

    expect(mapStateToProps(state).squares).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });

  it('should show last gameover state', () => {
    const state = {
      board: {
        ...initialState,
        gameover: true,
      },
    };

    expect(mapStateToProps(state).gameover).toEqual(true);
  });

  it('should show last draw state', () => {
    const state = {
      board: {
        ...initialState,
        draw: true,
      },
    };

    expect(mapStateToProps(state).draw).toEqual(true);
  });

  it('should show last cross state', () => {
    const state = {
      board: {
        ...initialState,
        cross: 7,
      },
    };

    expect(mapStateToProps(state).cross).toEqual(7);
  });

  it('should show last nought state', () => {
    const state = {
      board: {
        ...initialState,
        nought: 2,
      },
    };

    expect(mapStateToProps(state).nought).toEqual(2);
  });

  it('should show last sets state', () => {
    const state = {
      board: {
        ...initialState,
        sets: 5,
      },
    };

    expect(mapStateToProps(state).sets).toEqual(5);
  });

  it('should move player when button is clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).movePlayer(1, 2);

    expect(dispatch.mock.calls[0][0]).toEqual({ type: MOVE_PLAYER, payload: { row: 1, col: 2 } });
  });

  it('should step back when button is clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).stepBack();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: STEP_BACK });
  });

  it('should step forward when button is clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).stepForward();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: STEP_FORWARD });
  });

  it('should reset game when button is clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).resetGame();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: RESET_GAME });
  });
});
