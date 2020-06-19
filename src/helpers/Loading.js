import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 1
  }

  50% {
    opacity: 0.4
  }

  100% {
    opacity: 1
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;
const Box = styled.div`
  background: lightgray;
  height: 90vh;
  width: 400px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 10px;
  transition: all 1s;
  animation: ${fadeIn} 3s ease-in-out;
  animation-iteration-count: infinite;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Wrapper>
  );
};

export default Loading;
