import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Wrapper,
  SectionTicket,
  SectionMessage,
  SectionInfo
} from '../components/Grid';
import OmniTicketComponent from '../components/OmniTicketComponent';
import OmniSearchComponent from '../components/OmniSearchComponent';
import tickets from '../__test__/tickets.json';

type OmniContainerProps = {};
const OmniContainer: React.FC<OmniContainerProps> = (props) => {
  console.log(props);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentBtn, setCurrentBtn] = useState<string>('');
  const [currentTicket, setCurrentTicket] = useState<string>('');
  const switchBtn = (event: string, filter: string): void => {
    setSearchValue(filter);
    setCurrentBtn(event);
  };
  const setValue = (event: string): void => {
    setSearchValue(event);
    setCurrentBtn('');
  };
  const ticketInfoRequest = (e: {
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
  }) => {
    const id = e.ticket_id;
    setCurrentTicket(id);
  };
  return (
    <Wrapper>
      <SectionTicket>
        <OmniSearchComponent
          searchValue={searchValue}
          setValue={setValue}
          switchBtn={switchBtn}
          currentBtn={currentBtn}
        />
        <OmniTicketComponent
          tickets={tickets}
          currentTicket={currentTicket}
          ticketInfoRequest={ticketInfoRequest}
        />
      </SectionTicket>
      <SectionMessage />
      <SectionInfo />
    </Wrapper>
  );
};
const mapStateToProps = (state: any) => state;

const connectedOmniContainer = connect(mapStateToProps)(OmniContainer);
export default connectedOmniContainer;
