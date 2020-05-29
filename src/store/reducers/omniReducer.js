import actionTypes from '../constants';

const initialState = {
  ticket: [],
  ticketIsLoading: true,
  ticketInfo: null,
  ticketError: null,
  ticketInfoIsLoading: true,
  hasMore: '',
};

const omniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICKET_REQUEST:
      return {
        ...state,
        ticketIsLoading: true,
        hasMore: '',
      };
    case actionTypes.TICKET_SUCCESS:
      return {
        ...state,
        ticketIsLoading: false,
        ticket: [...state.ticket, ...action.payload.data.results],
        // ticket: action.payload.data,
        hasMore: action.payload.data.next,
      };
    case actionTypes.TICKET_FAILURE:
      return {
        ...state,
        ticketIsLoading: false,
        ticketError: action.payload,
        hasMore: '',
      };
    case actionTypes.TICKET_INFO_REQUEST:
      return {
        ...state,
        ticketInfoIsLoading: true,
      };
    case actionTypes.TICKET_INFO_SUCCESS:
      return {
        ...state,
        ticketInfoIsLoading: false,
        ticketInfo: action.payload.data,
      };
    case actionTypes.TICKET_INFO_FAILURE:
      return {
        ...state,
        ticketInfoLoading: false,
        ticketError: action.payload.error,
      };
    case actionTypes.SOCKET_NEW_ASSIGNED_TICKET:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          results: [action.payload.data, ...state.ticket.results],
        },
      };
    default:
      return state;
  }
};

export default omniReducer;
