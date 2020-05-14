import actionTypes from '../constants';
import loginServices from '../services/loginServices';

const authUser = (login, password) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
  });

  try {
    const user = await loginServices(login, password);
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
