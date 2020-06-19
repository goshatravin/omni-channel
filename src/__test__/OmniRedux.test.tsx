import tickets from './tickets.json';

describe('Test Omni action', () => {
  let expectedAction;
  beforeEach(() => {
    expectedAction = {};
  });
  it('should return TICKET_REQUEST', () => {
    expectedAction = {
      type: 'TICKET_REQUEST'
    };
    expect(ticketRequest().toEqual(expectedAction));
  });
  it('should return TICKET_SUCCESS', () => {
    expectedAction = {
      type: 'TICKET_SUCCESS',
      payload: tickets
    };
    expect(ticketSuccess().toEqual(expectedAction));
  });
  it('should return TICKET_FAILED', () => {
    expectedAction = {
      type: 'TICKET_FAILED'
    };
    expect(ticketFailed().toEqual(expectedAction));
  });
});
