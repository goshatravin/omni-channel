// eslint-disable-next-line no-unused-vars
import { Reducer } from 'redux';
import actionTypes from '../actionTypes';

interface OmniState {
  tickets: null;
}

const initialState: OmniState = {
  tickets: null
};

const OmniReducer: Reducer<OmniState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICKET_REQUEST:
      return {
        ...state
      };
    case actionTypes.TICKET_SUCCESS:
      return {
        ...state
      };
    case actionTypes.TICKET_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default OmniReducer;
