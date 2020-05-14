import actionTypes from '../constants';
// import sessionServices from '../services/sessionServices';
import Api from '../services/api';

const sessionUser = (path) => async (dispatch) => {
  dispatch({
    type: actionTypes.SESSION_REQUEST,
  });

  try {
    // const user = await sessionServices(path);
    const user = await Api(path, 'post')
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.error) {
          throw data.error;
        }
        return data;
      })
      .catch((error) => {
        throw error;
      });
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
