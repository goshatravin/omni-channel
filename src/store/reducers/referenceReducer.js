import actionTypes from '../constants';

const initialState = {
  reference: null,
  error: null,
  referenceIsLoading: true,
};

const referenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REFERENCE_CHANNEL_REQUEST:
      return {
        reference: null,
        error: null,
        referenceIsLoading: true,
      };
    case actionTypes.REFERENCE_CHANNEL_SUCCESS:
      return {
        reference: action.payload.data,
        error: null,
        referenceIsLoading: false,
      };
    case actionTypes.REFERENCE_CHANNEL_FAILURE:
      return {
        reference: null,
        error: action.payload.error,
        referenceIsLoading: false,
      };
    default:
      return state;
  }
};
export default referenceReducer;
