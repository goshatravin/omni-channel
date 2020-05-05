import React from 'react';
import styled from 'styled-components';

const Logo = styled.p`
  font-size: 30px;
  letter-spacing: 5px;
  padding-bottom: 50px;
  color: lightsteelblue;
  font-weight: bold;
  text-transform: uppercase;
`;

const LogoBox = styled.div`
  /* background: linear-gradient(#5C79FF , #76D3FF); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoComponent = () => {
  return (
    <LogoBox>
      <Logo>стаканчик.</Logo>
    </LogoBox>
  );
};


export default logoComponent;
