// @flow
import { connect } from 'react-redux';

import {
  selectSquares,
  selectGameover,
  selectDraw,
  selectCross,
  selectNought,
  selectSets,
} from '../selectors';

import {
  movePlayer,
  stepBack,
  stepForward,
  resetGame,
} from '../actions';

import TicTac from './TicTac';

export const mapStateToProps = (state) => ({
  squares: selectSquares(state),
  gameover: selectGameover(state),
  draw: selectDraw(state),
  cross: selectCross(state),
  nought: selectNought(state),
  sets: selectSets(state),
});

export const mapDispatchToProps = (dispatch) => ({
  movePlayer: (row, col) => dispatch(movePlayer(row, col)),
  stepBack: () => dispatch(stepBack()),
  stepForward: () => dispatch(stepForward()),
  resetGame: () => dispatch(resetGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTac);
