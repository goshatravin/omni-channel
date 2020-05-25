import actionTypes from '../constants';

const initialState = {
  ticket: null,
  ticketIsLoading: false,
  ticketInfo: null,
  ticketError: null,
  ticketInfoIsLoading: false,
};

const omniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICKET_REQUEST:
      return {
        ...state,
        ticketIsLoading: true,
      };
    case actionTypes.TICKET_SUCCESS:
      return {
        ...state,
        ticketIsLoading: false,
        ticket: action.payload.data,
      };
    case actionTypes.TICKET_FAILURE:
      return {
        ...state,
        ticketIsLoading: false,
        ticketError: action.payload,
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
        ticket: [action.payload.data, ...state.ticket],
      };
    default:
      return state;
  }
};
export default omniReducer;
