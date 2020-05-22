import actionTypes from '../constants';
import axios from '../services/axios';

const ticketRequest = () => {
  return {
    type: actionTypes.TICKET_REQUEST,
  };
};

const ticketSuccess = (data) => {
  return {
    type: actionTypes.TICKET_SUCCESS,
    payload: {
      data,
    },
  };
};

const ticketFailure = (error) => {
  return {
    type: actionTypes.TICKET_FAILURE,
    payload: {
      error,
    },
  };
};

const ticketInfoRequest = () => {
  return {
    type: actionTypes.TICKET_INFO_REQUEST,
  };
};
const ticketInfoSuccess = (data) => {
  return {
    type: actionTypes.TICKET_INFO_SUCCESS,
    payload: {
      data,
    },
  };
};
const ticketInfoFailure = (error) => {
  return {
    type: actionTypes.TICKET_INFO_FAILURE,
    payload: {
      error,
    },
  };
};
const getTicket = (path) => async (dispatch) => {
  dispatch(ticketRequest());
  return axios(`${process.env.REACT_APP_URL_OMNICHANNEL}${path}`, {
    method: 'GET',
  })
    .then((response) => {
      const { data } = response;
      if (data.error) {
        throw data;
      }
      const { value } = data;
      dispatch(ticketSuccess(value));
    })
    .catch((error) => {
      dispatch(ticketFailure(error));
    });
};

const getTicketInfo = (path) => async (dispatch) => {
  dispatch(ticketInfoRequest());
  return axios(`${process.env.REACT_APP_URL_OMNICHANNEL}${path}`, {
    method: 'GET',
  })
    .then((response) => {
      console.log(response);
      const { data } = response;
      if (data.error) {
        throw data;
      }
      const { value } = data;
      dispatch(ticketInfoSuccess(value));
    })
    .catch((error) => {
      dispatch(ticketInfoFailure(error));
    });
};

export { getTicket, getTicketInfo };
