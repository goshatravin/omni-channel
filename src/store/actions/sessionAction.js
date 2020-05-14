import actionTypes from '../constants';
import sessionServices from '../services/sessionServices';

const sessionUser = (path) => async (dispatch) => {
  dispatch({
    type: actionTypes.SESSION_REQUEST,
  });

  try {
    const user = await sessionServices(path);
    dispatch({
      type: actionTypes.SESSION_SUCCESS,
      payload: {
        user,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SESSION_FAILURE,
      payload: {
        error,
      },
    });
  }
};

export default sessionUser;
