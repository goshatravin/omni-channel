import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TasksComponent from '../../components/TasksComponents';
import InputComponent from '../../components/InputComponent';
import SearchComponent from '../../components/SearchComponent';
import { getCases, getCase } from '../../store/actions/omniAction';
import {
  Grid,
  Col,
  Row,
  Block,
  BlockOverflow,
  FlexBlock,
} from '../../components/layout/Grid';
import message from '../../chat.json';
import ChatComponent from '../../components/ChatComponent';
import ChatHeaderComponent from '../../components/ChatHeaderComponent';

const Dashboard = (props) => {
  const { dispatch, task, taskLoading } = props;
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [dialog, setDialogue] = useState([]);

  useEffect(() => {
    dispatch(getCases('/case'));
  }, [page]);
  const taskHandler = (taskInfo) => {
    const { id } = taskInfo;
    dispatch(getCase(`/case/${id}`));
  };
  if (!taskLoading && task.length !== 0) {
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <Block className="Search-Block">
              <SearchComponent searchHandler={setSearchValue} />
            </Block>
            <BlockOverflow>
              <TasksComponent taskValue={task} taskHandler={taskHandler} />
            </BlockOverflow>
          </Col>
          <Col size={2}>
            {dialog.length === 0 ? (
              <FlexBlock>
                <ChatHeaderComponent data={dialog} />
                <ChatComponent data={message} />
                <InputComponent
                  className="input_chat"
                  inputType="input"
                  placeholder="Сообщение"
                  name="input"
                  width="450px"
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
  }
  return 'loading';
};

const mapStateToProps = (state) => {
  const { loggedIn, error } = state.loginReducer;
  const { task, taskLoading } = state.omniReducer;
  return {
    loggedIn,
    error,
    task,
    taskLoading,
  };
};

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
