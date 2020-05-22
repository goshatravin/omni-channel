import actionTypes from '../constants';

const initialState = {
  ticket: null,
  messageTicket: null,
  error: null,
  ticketLoading: false,
  ticketMessageLoading: false,
};

const omniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICKET_REQUEST:
      return {
        ticket: null,
        messageTicket: null,
        error: null,
        taskLoading: true,
      };
    case actionTypes.TICKET_SUCCESS:
      return {
        messageTicket: null,
        ticket: action.payload.data,
        error: null,
        ticketLoading: false,
      };
    case actionTypes.TICKET_FAILURE:
      return {
        messageTicket: null,
        ticket: null,
        error: action.payload,
        ticketLoading: false,
      };
    case actionTypes.TICKET_INFO_REQUEST:
      return {
        ...state,
        ticketInfoLoading: true,
      };
    case actionTypes.TICKET_INFO_SUCCESS:
      return {
        ...state,
        ticketInfoLoading: false,
        messageTicket: action.payload.data,
      };
    case actionTypes.TICKET_INFO_FAILURE:
      return {
        ...state,
        ticketInfoLoading: false,
        messageTicket: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default omniReducer;
