// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type SetsProps = {
  sets: number,
  resetGame: Function,
};

const Sets = ({ sets, resetGame }: SetsProps) => (
  <Sets.Wrapper>
    <Sets.Played>
      SETS: {sets}
    </Sets.Played>
    <Sets.Reset onClick={resetGame}>
      RESET
    </Sets.Reset>
  </Sets.Wrapper>
);

Sets.propTypes = {
  sets: PropTypes.number,
  resetGame: PropTypes.func,
};

Sets.Wrapper = styled.div`
  display         : flex;
  justify-content : space-evenly;
  margin-top      : 20px;
  width           : 300px;
  padding         : 5px;
  font-size       : 24px;
  color           : #fff;
`;

Sets.Played = styled.button`
  width            : 120px;
  border           : 2px solid #FC342A;
  border-radius    : 5px;
  font-size        : 24px;
  background-color : #fff;
  color            : #FC342A;
  cursor           : pointer;
  outline          : none;
`;

Sets.Reset = styled(Sets.Played)`
  border : 2px solid #00AA64;
  color  : #00AA64;
`;

export default Sets;
