import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  border: 1px solid blue;
  height: 40px;
`;
const ChatHeaderComponent = (props) => {
  const { data } = props;
  return (
    <Header>
      {data.name}
      ...
    </Header>
  );
};

export default ChatHeaderComponent;
