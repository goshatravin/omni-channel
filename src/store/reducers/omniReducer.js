import actionTypes from '../constants';

const initialState = {
  task: [],
  taskInfo: [],
  error: null,
  taskLoading: false,
  taskInfoLoading: false,
};

const omniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK_REQUEST:
      return {
        task: [],
        taskInfo: [],
        error: null,
        taskLoading: true,
      };
    case actionTypes.TASK_SUCCESS:
      return {
        taskInfo: [],
        task: action.payload.tasks,
        error: null,
        taskLoading: false,
      };
    case actionTypes.TASK_FAILURE:
      return {
        taskInfo: [],
        task: [],
        error: action.payload,
        taskLoading: false,
      };
    case actionTypes.TASK_INFO_REQUEST:
      return {
        ...state,
        taskInfoLoading: true,
      };
    case actionTypes.TASK_INFO_SUCCESS:
      return {
        ...state,
        taskInfoLoading: false,
        taskInfo: action.payload,
      };
    case actionTypes.TASK_INFO_FAILURE:
      return {
        ...state,
        taskInfoLoading: false,
        taskInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default omniReducer;
