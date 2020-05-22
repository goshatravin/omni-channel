import actionTypes from '../constants';
import axios from '../services/axios';

const regerenceRequest = () => {
  return {
    type: actionTypes.REFERENCE_CHANNEL_REQUEST,
  };
};

const referenceSuccess = (data) => {
  return {
    type: actionTypes.REFERENCE_CHANNEL_SUCCESS,
    payload: {
      data,
    },
  };
};

const referenceFailure = (error) => {
  return {
    type: actionTypes.REFERENCE_CHANNEL_FAILURE,
    payload: {
      error,
    },
  };
};
const getReference = (path) => async (dispatch) => {
  dispatch(regerenceRequest);
  return axios(`${process.env.REACT_APP_URL_OMNICHANNEL}${path}`, {
    method: 'GET',
  })
    .then((response) => {
      const { data } = response;
      if (data.error) {
        throw data;
      }
      const { value } = data;
      dispatch(referenceSuccess(value));
    })
    .catch((error) => {
      dispatch(referenceFailure(error));
    });
};
export { getReference, referenceFailure, referenceSuccess, regerenceRequest };
