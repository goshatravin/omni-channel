import React, { useState, useEffect, useRef, useCallback } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { getTicket, getTicketInfo } from '../../store/actions/omniAction';
import { getReference } from '../../store/actions/referenceAction';
import ticketUpdate from '../../store/actions/socketAction';
// import TasksComponent from '../../components/TasksComponents'; УБИРАЕМ
import InputComponent from '../../components/InputComponent';
// import SearchComponent from '../../components/SearchComponent'; ֵУБИРАЕМ
import ChatComponent from '../../components/ChatComponent';
import ChatHeaderComponent from '../../components/ChatHeaderComponent';
// import InputSearch from './inputSearch';
import TicketContainer from './ticketContainer';
import SearchContainer from './searchContainer';

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
  const [firstLoad, setfirstLoad] = useState(1);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  // const [filteredTicket, setFilteredTicket] = useState({});

  // const { loading, hasMore } = InputSearch(searchValue, page);
  // console.log(hasMore);
  // const observer = useRef();
  // const lastTicket = useCallback(
  //   (node) => {
  //     if (!loading && observer.current) {
  //       observer.current.disconnect();
  //     }
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         console.log(entries);
  //         setPage((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  // const { loading, newTicket } = InputSearch(searchValue, page);
  // const hend = (e) => {
  //   console.log(e);
  // };
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('omnichannelConnect');
    socket.on('omnichannelNotify', (data) => {
      dispatch(ticketUpdate(data));
    });
  }, []);
  useEffect(() => {
    // dispatch(getTicket('/ticket'));
    dispatch(getReference('/reference_book/channel_type'));
  }, [firstLoad]);

  // const ticketHandler = (data) => {
  //   console.log(data);
  //   // setHeaderInfo(data);
  //   // dispatch(getTicketInfo(`/signal/${data.ticket_id}`));
  // };
  if (!referenceIsLoading) {
    return (
      <Grid>
        <Row>
          <Col>
            <Block className="Search-Block">
              <SearchContainer setSearchValue={setSearchValue} />
            </Block>
            <BlockOverflow>
              <TicketContainer
                searchValue={searchValue}
                // ticketHandler={ticketHandler}
              />
              {/* <TasksComponent
                // lastBookElementRef={lastTicket}
                // filtredTicket={filteredTicket}
                ticketValue={ticket}
                referenceValue={reference}
                ticketHandler={ticketHandler}
              /> */}
            </BlockOverflow>
          </Col>
          <Col size={1}>
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
