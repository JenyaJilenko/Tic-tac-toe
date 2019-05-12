// @flow
import React from 'react';
import styled from 'styled-components';

import Square from '../../components/Square';

const renderSquare = (value, row, col, movePlayer, gameover) => (
  <Square
    key={parseInt(row + col, 10)}
    value={value}
    row={row}
    col={col}
    movePlayer={movePlayer}
    gameover={gameover}
  />
);

const renderRow = (squares, row, movePlayer, gameover) => {
  const squareRow = [];

  for (let i = 0; i < 3; i += 1) {
    squareRow.push(renderSquare(squares[row][i], row, i, movePlayer, gameover));
  }

  return squareRow;
};

type BoardProps = {
  squares: Array<Array<number>>,
  gameover: boolean,
  stepBack: Function,
  stepForward: Function,
  movePlayer: Function,
};

const Board = ({
  squares,
  movePlayer,
  stepBack,
  stepForward,
  gameover,
}: BoardProps) => (
  <>
    <Board.ButtonWrapper>
      <Board.Button onClick={stepBack}>
        Step Back
      </Board.Button>
      <Board.Button onClick={stepForward}>
        Step Forward
      </Board.Button>
    </Board.ButtonWrapper>
    <Board.Row>{renderRow(squares, 0, movePlayer, gameover)}</Board.Row>
    <Board.Row>{renderRow(squares, 1, movePlayer, gameover)}</Board.Row>
    <Board.Row>{renderRow(squares, 2, movePlayer, gameover)}</Board.Row>
  </>
);

Board.Row = styled.div`
  display     : flex;
  align-items : center;
`;

Board.ButtonWrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-evenly;
  width           : 50%;
  margin-bottom   : 20px;
`;

Board.Button = styled.button`
  width            : 120px;
  border           : 1px solid #000;
  border-radius    : 5px;
  font-size        : 24px;
  background-color : #fff;
  color            : #000;
`;

export default Board;
