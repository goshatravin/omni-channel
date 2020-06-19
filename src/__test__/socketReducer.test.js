import actionTypes from '../store/constants';
import omniReducer from '../store/reducers/omniReducer';

describe('socket reducer', () => {
  it('should update ticket data', () => {
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
    const initialState = {
      ticket: {
        count: 21,
        next: 'http://127.0.0.1:8000/api/v1/ticket/?page=5',
        previous: 'http://127.0.0.1:8000/api/v1/ticket/?page=3',
        results: [
          {
            assigned_to: '786',
            case_id: '1567899',
            channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
            created_at: '2020-05-04 10:34:49',
            created_by: '123',
            customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
            remark: 'Переписка идет с преставителем ЗЛ',
            status_type_id: '1',
            ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
            updated_at: '2020-05-04 11:27:56',
          },
          {
            assigned_to: '235',
            case_id: '2385585',
            channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
            created_at: '2020-05-04 10:34:49',
            created_by: '123',
            customer_id: '21418d70-9e2a-4ca1-93be-1fea433298f1',
            remark: 'Говорит, что обращался ранее, надо найти дело.',
            status_type_id: '1',
            ticket_id: '5ef54883-f15c-4091-a092-f6b545eafe18',
            updated_at: '2020-05-04 11:27:56',
          },
        ],
      },
      ticketIsLoading: false,
      ticketInfo: null,
      ticketError: null,
      ticketInfoIsLoading: false,
    };
    expect(
      omniReducer(
        {
          ticket: {
            count: 21,
            next: 'http://127.0.0.1:8000/api/v1/ticket/?page=5',
            previous: 'http://127.0.0.1:8000/api/v1/ticket/?page=3',
            results: [
              {
                assigned_to: '786',
                case_id: '1567899',
                channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
                created_at: '2020-05-04 10:34:49',
                created_by: '123',
                customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
                remark: 'Переписка идет с преставителем ЗЛ',
                status_type_id: '1',
                ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
                updated_at: '2020-05-04 11:27:56',
              },
              {
                assigned_to: '235',
                case_id: '2385585',
                channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
                created_at: '2020-05-04 10:34:49',
                created_by: '123',
                customer_id: '21418d70-9e2a-4ca1-93be-1fea433298f1',
                remark: 'Говорит, что обращался ранее, надо найти дело.',
                status_type_id: '1',
                ticket_id: '5ef54883-f15c-4091-a092-f6b545eafe18',
                updated_at: '2020-05-04 11:27:56',
              },
            ],
          },
          ticketIsLoading: false,
          ticketInfo: null,
          ticketError: null,
          ticketInfoIsLoading: false,
        },
        {
          type: actionTypes.SOCKET_NEW_ASSIGNED_TICKET,
          payload: {
            data,
          },
        }
      )
    ).toEqual({
      ticket: {
        count: 21,
        next: 'http://127.0.0.1:8000/api/v1/ticket/?page=5',
        previous: 'http://127.0.0.1:8000/api/v1/ticket/?page=3',
        results: [
          {
            ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
            created_by: '123',
            created_at: '2020-05-04 10:34:49',
            updated_at: null,
            channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
            status_type_id: '1',
            customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
            assigned_to: null,
            case_id: null,
          },
          {
            assigned_to: '786',
            case_id: '1567899',
            channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
            created_at: '2020-05-04 10:34:49',
            created_by: '123',
            customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
            remark: 'Переписка идет с преставителем ЗЛ',
            status_type_id: '1',
            ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
            updated_at: '2020-05-04 11:27:56',
          },
          {
            assigned_to: '235',
            case_id: '2385585',
            channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
            created_at: '2020-05-04 10:34:49',
            created_by: '123',
            customer_id: '21418d70-9e2a-4ca1-93be-1fea433298f1',
            remark: 'Говорит, что обращался ранее, надо найти дело.',
            status_type_id: '1',
            ticket_id: '5ef54883-f15c-4091-a092-f6b545eafe18',
            updated_at: '2020-05-04 11:27:56',
          },
        ],
      },
      ticketIsLoading: false,
      ticketInfo: null,
      ticketError: null,
      ticketInfoIsLoading: false,
    });
  });
});
