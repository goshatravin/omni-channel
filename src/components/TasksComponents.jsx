import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../theme/img/telegram.png';

const TaskDiv = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  font-size: 14px;
  width: 300px;
  height: 100px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.input_border};
  border-radius: 10px;
  background: white;
  /* box-shadow: 0px 1px 5px #dfe1e5; */
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.input_placeholder};
  }
`;
const P = styled.p`
  font-weight: 700;
  padding-bottom: 0.7rem;
`;
const Span = styled.span`
  color: grey;
`;
const Pbottom = styled.p`
  padding-bottom: 0.5rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding-top: 1rem; */
`;
const Block = styled.div`
  padding: 0.3rem;
`;
const Circle = styled.div`
  background: #548ce2;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.7rem;
`;

const TasksComponents = (props) => {
  const { taskValue, taskHandler } = props;
  const data = taskValue.map((item) => {
    return (
      <TaskDiv key={item.id} onClick={() => taskHandler(item)}>
        <Section>
          <Block>
            <img src={Logo} alt="" />
          </Block>
          <Block>
            <P>{item.name}</P>
            <Pbottom>
              <Span>Оператор:</Span> {item.operator}
            </Pbottom>
            <p>
              <Span>Статус:</Span> {item.status}
            </p>
          </Block>
          <Block>
            <Span>{item.time}</Span>
          </Block>
        </Section>
        <Section>
          <Block>{item.text}</Block>
          <Block>{item.new ? <Circle>{item.count}</Circle> : ''}</Block>
        </Section>
      </TaskDiv>
    );
  });
  return <>{data}</>;
};

TasksComponents.propTypes = {
  // taskValue: PropTypes.array.isRequired,
};

export default TasksComponents;
