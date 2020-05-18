import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Chat = styled.div`
  border: 1px solid red;
  flex: 1;
`;
const Input = styled.input``;
const ChatComponent = (props) => {
  const { data } = props;
  return <Chat> </Chat>;
};

export default ChatComponent;
