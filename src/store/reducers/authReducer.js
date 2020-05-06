import authConstants from '../constants/Authconstants';

const initialState = {
  loggedIn: false,
  user: '',
  error: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
        user: action.user,
        error: '',
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        error: '',
      };
    case authConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: '',
        error: action.error,
      };
    case authConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default auth;
