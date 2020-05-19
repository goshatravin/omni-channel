import actionTypes from '../constants';
import { Omnichannel } from '../services/api';

const getCases = (path) => async (dispatch) => {
  dispatch({
    type: actionTypes.TASK_REQUEST,
  });

  try {
    const tasks = await Omnichannel(path, 'get')
      .then((response) => {
        const { data } = response;
        if (data.error) {
          throw data;
        }
        const { value } = response.data;
        return value;
      })
      .catch((error) => {
        throw error;
      });
    dispatch({
      type: actionTypes.TASK_SUCCESS,
      payload: {
        tasks,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.TASK_FAILURE,
      payload: {
        error,
      },
    });
  }
};

const getCase = (path) => async (dispatch) => {
  dispatch({
    type: actionTypes.TASK_INFO_REQUEST,
  });

  try {
    const tasks = await Omnichannel(path, 'post')
      .then((response) => {
        const { data } = response;
        if (data.error) {
          throw data;
        }
        const { value } = response.data;
        return value;
      })
      .catch((error) => {
        throw error;
      });
    dispatch({
      type: actionTypes.TASK_INFO_REQUEST,
      payload: {
        tasks,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.TASK_INFO_FAILURE,
      payload: {
        error,
      },
    });
  }
};

export { getCases, getCase };
