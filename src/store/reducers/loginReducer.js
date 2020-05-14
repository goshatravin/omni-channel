import actionTypes from '../constants';

const initialState = {
  loggedIn: false,
  isLoading: false,
  data: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        data: action.payload.data,
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        data: null,
        error: action.payload.error,
      };
    case actionTypes.SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SESSION_SUCCESS:
      return {
        loggedIn: true,
        isLoading: false,
        data: action.payload,
      };
    case actionTypes.SESSION_FAILURE:
      return {
        loggedIn: false,
        isLoading: false,
        error: action.payload,
        data: null,
      };
    case actionTypes.ERROR_INPUT:
      return {
        ...state,
        error: {
          error: true,
          text: 'Поля логин и пароль должны быть не пустыми',
        },
      };
    default:
      return state;
  }
};
export default loginReducer;
