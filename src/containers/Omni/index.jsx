import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { getTicket, getTicketInfo } from '../../store/actions/omniAction';
import { getReference } from '../../store/actions/referenceAction';
import ticketUpdate from '../../store/actions/socketAction';
import TasksComponent from '../../components/TasksComponents';
import InputComponent from '../../components/InputComponent';
import SearchComponent from '../../components/SearchComponent';
import ChatComponent from '../../components/ChatComponent';
import ChatHeaderComponent from '../../components/ChatHeaderComponent';
import {
  Grid,
  Col,
  Row,
  Block,
  BlockOverflow,
  FlexBlock,
} from '../../components/layout/Grid';

export const Dashboard = (props) => {
  console.log(props);
  const {
    dispatch,
    ticket,
    ticketIsLoading,
    ticketInfo,
    reference,
    referenceIsLoading,
    ticketInfoIsLoading,
  } = props;
  const [chatMessage, setChatMessage] = useState('');
  const [headerInfo, setHeaderInfo] = useState({});
  const ENDPOINT = 'http://localhost:8084';
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('omnichannelConnect');
    socket.on('omnichannelNotify', (data) => {
      dispatch(ticketUpdate(data));
    });
  }, []);

  useEffect(() => {
    dispatch(getTicket('/ticket'));
    dispatch(getReference('/reference_book/channel_type'));
  }, [page]);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const ticketHandler = (data) => {
    setHeaderInfo(data);
    dispatch(getTicketInfo(`/signal/${data.ticket_id}`));
  };
  if (!ticketIsLoading && !referenceIsLoading && ticket && reference) {
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
            {ticketInfo && !ticketInfoIsLoading ? (
              <FlexBlock>
                <ChatHeaderComponent data={headerInfo} />
                <ChatComponent data={ticketInfo} />
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
              ''
            )}
          </Col>
          <Col size={4}></Col>
        </Row>
      </Grid>
    );
  }
  return <p>loading</p>;
};

const mapStateToProps = (state) => {
  /**
   * mapStateToProps() returns a redux state
   * @ticket - contains information about new appeals
   * @ticketIsLoading - constant which shows loading of ticket
   * @ticketInfo - contains ticket information such as chating history
   * @ticketError - contains information about ticket errors
   * @ticketInfoIsLoading - constant which shows loading of ticket chat history
   * @reference  - constains information about channel_type (viber, telegram...)
   * @referenceIsLoading - constant which shows loading of reference
   */
  const {
    ticket,
    ticketIsLoading,
    ticketInfo,
    ticketError,
    ticketInfoIsLoading,
  } = state.omniReducer;
  const { reference, referenceIsLoading } = state.referenceReducer;
  return {
    ticket,
    ticketIsLoading,
    ticketInfo,
    reference,
    referenceIsLoading,
    ticketError,
    ticketInfoIsLoading,
  };
};

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
