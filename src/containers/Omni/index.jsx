import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import lodash from 'lodash';
import TasksComponent from '../../components/TasksComponents';
import InputComponent from '../../components/InputComponent';
import SearchComponent from '../../components/SearchComponent';
import {
  Grid,
  Col,
  Row,
  Block,
  BlockOverflow,
  FlexBlock,
} from '../../components/layout/Grid';
import data from '../../data.json';
import ChatComponent from '../../components/ChatComponent';
import ChatHeaderComponent from '../../components/ChatHeaderComponent';

const Dashboard = (props) => {
  /**
   * setSearchValue() return new value of input with value = searchValue
   */
  const [searchValue, setSearchValue] = useState('');
  /**
   * setTaskValue() get all task from db and put it in a taskValue
   */
  const [taskValue, setTaskValue] = useState(data);
  /**
   * setChatMessage() return new value of input with value = chatMessage
   */
  const [chatMessage, setChatMessage] = useState('');
  /**
   * setDialogue() after click on tasks, will store info about task
   */
  const [dialog, setDialogue] = useState([]);

  useEffect(() => {
    // make dispatch to send search value
  });
  /**
   * taskHandler() make axios call to get chat details
   */
  const taskHandler = (id) => {
    setDialogue(id);
  };
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <Block className="Search-Block">
            <SearchComponent searchHandler={setSearchValue} />
          </Block>
          <BlockOverflow>
            <TasksComponent taskValue={taskValue} taskHandler={taskHandler} />
          </BlockOverflow>
        </Col>
        <Col size={5}>
          {dialog.length !== 0 ? (
            <FlexBlock>
              <ChatHeaderComponent data={dialog} />
              <ChatComponent data={dialog} />
              <InputComponent
                className="input_chat"
                inputType="input"
                placeholder="Сообщение"
                name="input"
                width="370px"
                controlFunc={(e) => {
                  setChatMessage(e.target.value);
                }}
                value={chatMessage}
              />
            </FlexBlock>
          ) : (
            'пощел ты'
          )}
        </Col>
        <Col size={4}>2</Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const { loggedIn, error } = state.loginReducer;
  return {
    loggedIn,
    error,
  };
};

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
