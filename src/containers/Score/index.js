// @flow
import React from 'react';
import styled from 'styled-components';

type ScoreProps = {
  cross: number,
  nought: number,
};

const Score = ({ cross, nought }: ScoreProps) => (
  <Score.Board>
    <Score.Text>Score</Score.Text>
    <Score.Cross>X: { cross }</Score.Cross> | <Score.Nought>O: { nought } </Score.Nought>
  </Score.Board>
);

Score.Board = styled.div`
  display          : flex;
  justify-content  : space-evenly;
  margin-top       : 20px;
  width            : 250px;
  padding          : 5px;
  border           : 1px solid #4B19C4;
  border-radius    : 5px;
  font-size        : 24px;
  background-color : #4B19C4;
  color            : #fff;
`;

Score.Text = styled.span`
  margin-right: 10px;
`;

Score.Cross = styled.span`
  color: #e04c57;
`;

Score.Nought = styled.span`
  color: #79ac5f;
`;

export default Score;
