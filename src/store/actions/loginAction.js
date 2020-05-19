import { Base64 } from 'js-base64';
import actionTypes from '../constants';
// import loginServices from '../services/loginServices';
import { Api } from '../services/api';

const authUser = (login, password) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
  });

  try {
    const userData = {
      login,
      password,
    };
    const user = await Api('login', 'post', userData)
      .then((response) => {
        const { data } = response;
        if (data.error) {
          throw data;
        }
        const { value } = response.data;
        let encoded = [];
        encoded = JSON.parse(Base64.decode(value));
        return encoded;
      })
      .catch((error) => {
        throw error;
      });
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGOUT_FAILURE,
      payload: {
        error,
      },
    });
  }
};

export default authUser;
