/**
 * File: OmniTicketComponent.tsx
 * -------------------------
 * Component for rendering tickets
 */
import React from 'react';
import Styled from 'styled-components';
import Viber from '../theme/img/3.png';

export interface Result {
  ticket_id: string;
  created_by: string;
  created_at: string;
  updated_at: string | null;
  channel: string;
  status_type: string;
  customer: string;
  assigned_to: string;
  remark: string;
  latest_signal: string | null;
  case: string | null;
  case_status: string | null;
  insured_dob: string | null;
}

export interface OmniTicketComponentProps {
  tickets: {
    count: number;
    next: string;
    previous?: any;
    results?: Result[];
  };
  currentTicket: string;
  ticketInfoRequest: (e: {
    assigned_to: string | null;
    case: string | null;
    case_status: string | null;
    channel: string | null;
    created_at: string | null;
    created_by: string | null;
    customer: string | null;
    insured_dob: string | null;
    latest_signal: string | null;
    remark: string | null;
    status_type: string | null;
    ticket_id: string;
    updated_at: string | null;
  }) => void;
}

const Wrapper = Styled.div`
  margin-top: 20px;
  flex: 1;
  overflow-y: scroll;
`;
const TicketBox = Styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem 0.5rem;
  font-size: 14px;
  width: 300px;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  border: 1px solid #EBEFF3;
  border-radius: 10px;
  background: ${(props) => (props.id === '1' ? '#e5ebf5' : 'white')};
  outline: none;
`;
const Section = Styled.div`
  display: flex;
`;
const Block = Styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  margin-right: 1rem;
  justify-content: center;
  img {
    max-width: 40px;
  }
`;
const Bold = Styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 10px;
`;
const Normal = Styled.div`
  font-weight: 400;
  padding-bottom: 10px;
  font-size: 13px;
`;
const Small = Styled.div`
  padding-top: 15px;
  font-weight: 300;
  font-size: 14px;
`;
const Label = Styled.div`
  color: grey;
  padding-bottom: 5px;
`;

Wrapper.displayName = 'wrapper'; // show real display name for Wrapper, (need it for the jest test)
TicketBox.displayName = 'ticketBox'; // show real display name for TicketBox, (need it for the jest test)
/**
 * Render tickets, if this are no tickets return <p>Упппсии</p>
 *
 * @param { tickets } array with 10 tickets
 * @param { ticketInfoRequest } function
 * after click on ticket send inforamion about this ticket to OmniContainer.tsx
 * @param { currentTicket } string
 * contains information about clicked ticked (change background for clicked ticked)
 *
 */
const OmniTicketComponent: React.FC<OmniTicketComponentProps> = (props) => {
  const { tickets, ticketInfoRequest, currentTicket } = props;
  return (
    <Wrapper>
      {tickets.results ? (
        tickets.results.map((item) => (
          <TicketBox
            key={item.ticket_id}
            onClick={() => ticketInfoRequest(item)}
            id={currentTicket === item.ticket_id ? '1' : ''}
          >
            <Section>
              <Block>
                <img src={Viber} alt="Channel_type" />
              </Block>
              <Block>
                <Bold>{item.customer}</Bold>
                <Normal>
                  <Label>Оператор:</Label>
                  {item.assigned_to}
                </Normal>
                <Normal>
                  <Label>Статус:</Label>
                  {item.status_type}
                </Normal>
              </Block>
            </Section>
            <Section>
              <Block>
                <Small>{item.latest_signal ? item.latest_signal : '404...'}</Small>
              </Block>
            </Section>
          </TicketBox>
        ))
      ) : (
        <p>Упппппси... </p>
      )}
    </Wrapper>
  );
};

export default OmniTicketComponent;
