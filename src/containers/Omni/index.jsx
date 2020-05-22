import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TasksComponent from '../../components/TasksComponents';
import InputComponent from '../../components/InputComponent';
import SearchComponent from '../../components/SearchComponent';
import { getTicket, getTicketInfo } from '../../store/actions/omniAction';
import { getReference } from '../../store/actions/referenceAction';
import {
  Grid,
  Col,
  Row,
  Block,
  BlockOverflow,
  FlexBlock,
} from '../../components/layout/Grid';
import ChatComponent from '../../components/ChatComponent';
import ChatHeaderComponent from '../../components/ChatHeaderComponent';

const Dashboard = (props) => {
  const {
    dispatch,
    ticket,
    ticketLoading,
    reference,
    referenceIsLoading,
    messageTicket,
    ticketInfoLoading,
  } = props;
  console.log(props);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  // const [dialog, setDialogue] = useState([]);

  useEffect(() => {
    dispatch(getTicket('/ticket'));
    dispatch(getReference('/reference_book/channel_type'));
  }, [page]);
  const ticketHandler = (ticketInfo) => {
    const { id } = ticketInfo;
    dispatch(getTicketInfo(`/signal/${id}`));
  };
  if (!ticketLoading && ticket && !referenceIsLoading && reference) {
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <Block className="Search-Block">
              <SearchComponent searchHandler={setSearchValue} />
            </Block>
            <BlockOverflow>
              <TasksComponent
                ticketValue={ticket}
                referenceValue={reference}
                ticketHandler={ticketHandler}
              />
            </BlockOverflow>
          </Col>
          <Col size={2}>
            {messageTicket && !ticketInfoLoading ? (
              <FlexBlock>
                <ChatHeaderComponent />
                <ChatComponent data={messageTicket} />
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
  console.log(state);
  const { loggedIn, error } = state.loginReducer;
  const {
    ticket,
    ticketLoading,
    messageTicket,
    ticketInfoLoading,
  } = state.omniReducer;
  const { reference, referenceIsLoading } = state.referenceReducer;
  return {
    loggedIn,
    error,
    ticket,
    ticketLoading,
    reference,
    referenceIsLoading,
    messageTicket,
    ticketInfoLoading,
  };
};

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
