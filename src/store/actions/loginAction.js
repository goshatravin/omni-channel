import { Base64 } from 'js-base64';
import actionTypes from '../constants';
import axios from '../services/axios';

const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};
const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};
const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

const authUser = (login, password) => (dispatch) => {
  dispatch(loginRequest());
  return axios('/login', {
    method: 'POST',
    data: {
      login,
      password,
    },
  })
    .then(({ data }) => {
      if (data.error) {
        throw data;
      }
      const { value } = data;
      let encoded = [];
      encoded = JSON.parse(Base64.decode(value));
      dispatch(loginSuccess(encoded));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
export { authUser, loginFailure, loginSuccess, loginRequest };
