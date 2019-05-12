// @flow
import React from 'react';
import styled from 'styled-components';

import Board from '../Board';
import Score from '../Score';
import Sets from '../Sets';
import Message from '../Message';

type TicTacProps = {
  squares: Array<Array<number>>,
  gameover: boolean,
  draw: boolean,
  sets: number,
  cross: number,
  nought: number,
  movePlayer: Function,
  stepBack: Function,
  stepForward: Function,
  resetGame: Function,
};

const TicTac = ({
  squares,
  gameover,
  draw,
  sets,
  cross,
  nought,
  movePlayer,
  stepBack,
  stepForward,
  resetGame,
}: TicTacProps) => (
  <TicTac.Wrapper>
    <Board
      squares={squares}
      gameover={gameover}
      movePlayer={movePlayer}
      stepBack={stepBack}
      stepForward={stepForward}
    />
    <Message
      draw={draw}
      gameover={gameover}
    />
    <Sets
      sets={sets}
      resetGame={resetGame}
    />
    <Score
      cross={cross}
      nought={nought}
    />
  </TicTac.Wrapper>
);

TicTac.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export default TicTac;
