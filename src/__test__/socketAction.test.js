import actionTypes from '../store/constants';
import ticketUpdate from '../store/actions/socketAction';

describe('Socket action', () => {
  it('should return ticket update', () => {
    const data = {
      ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
      created_by: '123',
      created_at: '2020-05-04 10:34:49',
      updated_at: null,
      channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
      status_type_id: '1',
      customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
      assigned_to: null,
      case_id: null,
    };
    const expectedAction = {
      type: actionTypes.SOCKET_NEW_ASSIGNED_TICKET,
      payload: {
        data,
      },
    };

    expect(
      ticketUpdate({
        ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
        created_by: '123',
        created_at: '2020-05-04 10:34:49',
        updated_at: null,
        channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
        status_type_id: '1',
        customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
        assigned_to: null,
        case_id: null,
      })
    ).toEqual(expectedAction);
  });
});
