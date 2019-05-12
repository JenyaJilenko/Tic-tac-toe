import * as R from 'ramda';
import React from 'react';
import styled from 'styled-components';

const Square = ({
  movePlayer,
  value,
  row,
  col,
  gameover,
}) => {
  const square = R.cond([
    [
      R.equals(2),
      R.always(<Square.Cross>X</Square.Cross>),
    ],
    [
      R.equals(1),
      R.always(<Square.Nought>O</Square.Nought>),
    ],
    [R.T, R.always(<Square.Mark disabled={gameover} onClick={() => movePlayer(row, col)} />)],
  ])(value);

  return square;
};

Square.Mark = styled.button`
  width            : 100px;
  height           : 100px;
  padding          : 20px;
  border           : 2px solid #505c5f;
  font-size        : 28px;
  text-align       : center;
  background-color : #fff;
  outline-color    : #4B19C4;
`;

Square.Nought = styled(Square.Mark)`
  color: #79ac5f;
`;

Square.Cross = styled(Square.Mark)`
  color: #e04c57;
`;

export default Square;
