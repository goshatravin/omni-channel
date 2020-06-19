import { shallow } from 'enzyme';
import * as React from 'react';
import tickets from './tickets.json';
import OmniTicketComponent from '../components/OmniTicketComponent';

describe('Test Omni Ticket component', () => {
  let wrapper: any;
  const props = {
    tickets,
    currentTicket: '',
    ticketInfoRequest: jest.fn()
  };
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<OmniTicketComponent {...props} />);
  });
  it('should render  wrapper correctly', () => {
    expect(wrapper.find('wrapper')).toHaveLength(1);
  });
  it('shouild render 10 tickets', () => {
    expect(wrapper.find('ticketBox')).toHaveLength(10);
  });
});
