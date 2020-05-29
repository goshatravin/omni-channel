/**
 * File: ticketContainer.jsx
 * -----------------
 * Ticket container for handle logic part
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketComponent from '../../components/TicketComponents';
import { getTicket, getTicketInfo } from '../../store/actions/omniAction';

/**
 * @param {function} dispatch - redux function to call redux action
 * @param {boolean} ticketIsLoading - change depends on api call results
 * @param {array} ticket - array of ticket
 * @param {string} ticketError - if api call fail, ticketError will contain error
 * @param {string} hasMore stirng with information about , how many data can i get
 * @param {string} searchValue contains information of user input
 *
 */
const TicketContainer = (props) => {
  const {
    dispatch,
    ticketIsLoading,
    ticket,
    ticketError,
    hasMore,
    searchValue,
  } = props;

  // constant for calling api with current page
  const [page, setPage] = useState(1);
  // constant with id of click ticket
  const [ticketValue, setTicketValue] = useState({});

  /**
   *
   * lastTicektRef() Fucntion looking for last element in ticket list, if  100% of last element on screen
   * and @hasMore  !== '', launch @setPage hook whitch add + 1 page.
   *
   */
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

  /**
   * UseEffect hook looking for @page constant, and if @page change trigger dispatch
   * @param {function} getTicket redux action return new tickets
   * @param {string} searchValue contains information of user input
   */
  useEffect(() => {
    dispatch(getTicket('/ticket', searchValue, page));
  }, [page]);

  /**
   * UseEffect hook looking for @ticketValue constant, and if @ticketValue change
   * trigger dispatch
   * @param {function} getTicketInfo redux action return ticekt chat history
   * @param {string} ticket_id if of clicked ticket
   */
  useEffect(() => {
    if (ticketValue.ticket_id !== undefined) {
      dispatch(getTicketInfo(`/signal/${ticketValue.ticket_id}`));
    }
  }, [ticketValue]);

  return (
    <>
      <TicketComponent
        lastHandle={lastTicektRef}
        ticket={ticket}
        ticketIsLoading={ticketIsLoading}
        ticketError={ticketError}
        setTicketValue={setTicketValue}
      />
    </>
  );
};
TicketContainer.defaultProps = {
  ticket: [],
  ticketError: null,
  searchValue: '',
  hasMore: null,
};

TicketContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ticketIsLoading: PropTypes.bool.isRequired,
  ticket: PropTypes.arrayOf(PropTypes.object),
  ticketError: PropTypes.string,
  hasMore: PropTypes.string,
  searchValue: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { ticket, ticketError, ticketIsLoading, hasMore } = state.omniReducer;
  return {
    ticket,
    ticketError,
    ticketIsLoading,
    hasMore,
  };
};

const connectedDashboard = connect(mapStateToProps)(TicketContainer);
export default connectedDashboard;
