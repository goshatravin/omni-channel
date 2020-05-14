import styled from 'styled-components';
import React from 'react';
// import { ReactComponent as Logo } from '../img/Asset.svg';

const Wrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  ${(props) => {
    console.log(props);
  }}
`;
const ThemeToggle = (props) => {
  const { setDark, value } = props;
  return (
    <Wrapper onClick={() => setDark(!value)}>
      <button type="button" onClick={() => setDark(!value)}>
        Поменять
      </button>
      {/* <Logo /> */}
    </Wrapper>
  );
};

export default ThemeToggle;
