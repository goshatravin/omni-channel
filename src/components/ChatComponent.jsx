import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Chat = styled.div`
  /* border: 1px solid red; */
  width: 500px;
  flex: 1;
`;
const From = styled.div`
  text-align: left;
  p {
    font-size: 16px;
    line-height: 19px;
    background: white;
    border: 1px solid #ebeff3;
    border-radius: 20px 10px 10px 0px;
    margin: 1rem 4rem 0.5rem 0rem;

    padding: 0.7rem;
  }
`;
const My = styled.div`
  text-align: right;
  p {
    border-radius: 10px 20px 0px 10px;
    margin: 1rem 0rem 0.5rem 4rem;
    font-size: 16px;
    color: white;
    line-height: 19px;
    display: inline-block;
    background: #266cd7;
    border: 1px solid #ebeff3;
    padding: 0.7rem;
  }
`;
const TimeR = styled.div`
  text-align: right;
`;
const TimeL = styled.div`
  text-align: left;
`;
const StyledP = styled.p`
  color: #9fa9ad;
  font-size: 14px;
`;
const Input = styled.input``;
const ChatComponent = (props) => {
  const { data } = props;
  const message = data.map((item) => {
    {
      return item.from ? (
        <TimeL key={item.id}>
          <From>
            <p>{item.message}</p>
          </From>
          <StyledP>{item.time}</StyledP>
        </TimeL>
      ) : (
        <TimeR key={item.id}>
          <My>
            <p>{item.message}</p>
          </My>
          <StyledP>{item.time}</StyledP>
        </TimeR>
      );
    }
  });
  return <Chat>{message}</Chat>;
};

export default ChatComponent;
