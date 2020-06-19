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

const TasksComponents = (props) => {
  console.log(props);
  const {
    ticketValue,
    ticketHandler,
    referenceValue,
    // lastBookElementRef,
  } = props;
  /**
   * @ticketValue -  Object with information about all tickets
   * @ticketHandler - Function onClick , send data about clicked ticked
   * @referenceValue - Array with information about channel type eg viber, telegram ...
   */
  const data = ticketValue.results.map((item) => {
    // if (ticketValue.results.length === index + 1) {
    //   return (
    //     <TaskDiv
    //       className="TaskDiv qwe"
    //       key={item.ticket_id}
    //       onClick={() => ticketHandler(item)}
    //       ref={lastBookElementRef}
    //     >
    //       <Section>
    //         <Block>
    //           {referenceValue
    //             .filter((ref) => ref.channel_id === item.channel_id)
    //             .map((qwer) => (
    //               <img
    //                 src={qwer.channel_type_id}
    //                 key={qwer.channel_type_id}
    //                 alt={qwer.channel_type_id}
    //               />
    //             ))}
    //         </Block>
    //         <Block>
    //           <P className="created">{item.created_by}</P>
    //           <Pbottom className="Operator">
    //             <Span>Оператор:</Span> {item.assigned_to}
    //           </Pbottom>
    //           <p>
    //             <Span>Статус:</Span> {item.status_type_id}
    //           </p>
    //         </Block>
    //         <Block>
    //           <Span>
    //             {item.updated_at !== null
    //               ? moment(item.updated_at).format('DD.MM.YY, HH.mm')
    //               : moment(item.created_at).format('DD.MM.YY, HH.mm')}
    //           </Span>
    //         </Block>
    //       </Section>
    //     </TaskDiv>
    //   );
    // }
    return (
      <TaskDiv
        className="TaskDiv"
        key={item.ticket_id}
        onClick={() => ticketHandler(item)}
      >
        <Section>
          <Block>
            {referenceValue
              .filter((ref) => ref.channel_id === item.channel_id)
              .map((qwer) => (
                <img
                  src={qwer.channel_type_id}
                  key={qwer.channel_type_id}
                  alt={qwer.channel_type_id}
                />
              ))}
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
  return <>{data}</>;
};
TasksComponents.defaultProps = {
  results: [],
};

TasksComponents.propTypes = {
  ticketValue: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  ticketHandler: PropTypes.func.isRequired,
  referenceValue: PropTypes.arrayOf(PropTypes.object).isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
};

export default TasksComponents;
