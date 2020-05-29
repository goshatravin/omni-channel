import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TicketComponent from '../../components/TicketComponents'; // Dump component for rendering tickets
// import SearchComponent from '../../components/SearchComponent'; // Dump component from rendering search bar
import { getTicket } from '../../store/actions/omniAction';

// const TaskDiv = styled.div`
//   cursor: pointer;
//   padding: 1rem 0.5rem;
//   font-size: 14px;
//   width: 315px;
//   height: 100px;
//   background: yellow;
//   margin-bottom: 1rem;
//   margin-right: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   color: ${(props) => props.theme.colors.text};
//   border: 1px solid ${(props) => props.theme.colors.input_border};
//   border-radius: 10px;
//   background: white;
//   outline: none;
//   &::placeholder {
//     color: ${(props) => props.theme.colors.input_placeholder};
//   }
// `;
const TicketContainer = (props) => {
  console.log(props);
  const { dispatch, ticketIsLoading, ticket, ticketError, hasMore } = props;
  console.log(ticket);
  const [page, setPage] = useState(1); // setup starting page for calling ticket api
  const [searchValue, setSearchValue] = useState('');

  const observer = useRef();
  const lastTicektRef = useCallback(
    (node) => {
      if (ticketIsLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPageNumber) => prevPageNumber + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [ticketIsLoading, hasMore]
  );
  //
  useEffect(() => {
    dispatch(getTicket('/ticket', searchValue, page));
  }, [page]);

  return (
    <>
      {/* <SearchComponent searchHandler={setSearchValue} /> */}
      <TicketComponent
        lastHendler={lastTicektRef}
        ticket={ticket}
        loading={ticketIsLoading}
        error={ticketError}
      />
      {/* {ticket.map((item, index) => {
        if (ticket.length === index + 1) {
          return (
            <TaskDiv ref={lastTicektRef} key={item.ticket_id}>
              {item.created_by}
            </TaskDiv>
          );
        } else {
          return <TaskDiv key={item.ticket_id}>{item.created_by}</TaskDiv>;
        }
      })}
      <div>{ticketIsLoading && 'Loading...'}</div>
      <div>{ticketError && 'Error'}</div> */}
    </>
  );
  // return !ticketIsLoading && !ticketError
  //   ? ticket.map((item, index) => {
  //       if (ticket.length === index + 1) {
  //         return (
  //           <TaskDiv ref={lastTicektRef} key={item.ticket_id}>
  //             {item.created_by}
  //           </TaskDiv>
  //         );
  //       }
  //       return <TaskDiv key={item.ticket_id}>{item.created_by}</TaskDiv>;
  //     })
  //   : 'Loading...';
};

const mapStateToProps = (state) => {
  const {
    ticket,
    ticketError,
    ticketInfo,
    ticketInfoIsLoading,
    ticketIsLoading,
    hasMore,
  } = state.omniReducer;
  return {
    ticket,
    ticketError,
    ticketInfo,
    ticketInfoIsLoading,
    ticketIsLoading,
    hasMore,
  };
};

const connectedDashboard = connect(mapStateToProps)(TicketContainer);
export default connectedDashboard;
