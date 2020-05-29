/**
 * File: TaskComponents.jsx
 * -----------------
 * Component for rendering information about tickets
 */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

const TaskDiv = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  font-size: 14px;
  width: 315px;
  height: 100px;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.input_border};
  border-radius: 10px;
  background: white;
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
`;
const Block = styled.div`
  padding: 0.3rem;
`;

const TicketComponents = (props) => {
  console.log(props);
  const {
    lastHandle,
    ticket,
    ticketIsLoading,
    ticketError,
    setTicketValue,
  } = props;
  /**
   * @param {function} dispatch - redux function to call redux action
   * @param {boolean} ticketIsLoading - change depends on api call results
   * @param {array} ticket - array of ticket
   * @param {string} ticketError - if api call fail, ticketError will contain error
   * @param {string} hasMore stirng with information about , how many data can i get
   * @param {string} searchValue contains information of user input
   */
  const data = ticket.map((item, index) => {
    if (ticket.length === index + 1) {
      return (
        <TaskDiv
          className="TaskDiv"
          key={item.ticket_id}
          ref={lastHandle}
          onClick={() => setTicketValue(item)}
        >
          <Section>
            <Block>
              {/* {referenceValue
              .filter((ref) => ref.channel_id === item.channel_id)
              .map((qwer) => (
                <img
                  src={qwer.channel_type_id}
                  key={qwer.channel_type_id}
                  alt={qwer.channel_type_id}
                />
              ))} */}
            </Block>
            <Block>
              <P className="created">{item.created_by}</P>
              <Pbottom className="Operator">
                <Span>Оператор:</Span> {item.assigned_to}
              </Pbottom>
              <p>
                <Span>Статус:</Span> {item.status_type_id}
              </p>
            </Block>
            <Block>
              <Span>
                {item.updated_at !== null
                  ? moment(item.updated_at).format('DD.MM.YY, HH.mm')
                  : moment(item.created_at).format('DD.MM.YY, HH.mm')}
              </Span>
            </Block>
          </Section>
        </TaskDiv>
      );
    }
    return (
      <TaskDiv
        className="TaskDiv"
        key={item.ticket_id}
        onClick={() => setTicketValue(item)}
      >
        <Section>
          <Block>
            {/* {referenceValue
              .filter((ref) => ref.channel_id === item.channel_id)
              .map((qwer) => (
                <img
                  src={qwer.channel_type_id}
                  key={qwer.channel_type_id}
                  alt={qwer.channel_type_id}
                />
              ))} */}
          </Block>
          <Block>
            <P className="created">{item.created_by}</P>
            <Pbottom className="Operator">
              <Span>Оператор:</Span> {item.assigned_to}
            </Pbottom>
            <p>
              <Span>Статус:</Span> {item.status_type_id}
            </p>
          </Block>
          <Block>
            <Span>
              {item.updated_at !== null
                ? moment(item.updated_at).format('DD.MM.YY, HH.mm')
                : moment(item.created_at).format('DD.MM.YY, HH.mm')}
            </Span>
          </Block>
        </Section>
      </TaskDiv>
    );
  });

  return (
    <>
      {data}
      <div>{ticketIsLoading && 'Loading...'}</div>
      <div>{ticketError && 'Error'}</div>
    </>
  );
};
TicketComponents.defaultProps = {
  ticket: [],
  ticketError: null,
};

TicketComponents.propTypes = {
  setTicketValue: PropTypes.func.isRequired,
  ticket: PropTypes.arrayOf(PropTypes.object),
  ticketError: PropTypes.string,
  ticketIsLoading: PropTypes.bool.isRequired,
  lastHandle: PropTypes.func.isRequired,
};

export default TicketComponents;
