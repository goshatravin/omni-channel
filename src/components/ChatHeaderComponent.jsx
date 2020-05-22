import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  border-bottom: 1px solid #dfe1e5;
  height: 40px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const ChatHeaderComponent = (props) => {
  const { data } = props;
  return (
    <Header>
      <Name>
        {/* <p>{data.fullname}</p> */}
        <p>213213</p>
      </Name>
    </Header>
  );
};

export default ChatHeaderComponent;
