import actionTypes from '../../constants';

const errorAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.ERROR_INPUT,
  });
};

export default errorAction;
