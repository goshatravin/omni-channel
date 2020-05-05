import authConstants from '../constants/Authconstants';
import { loginService, logoutService} from '../services/authServices';

const request = (user) => ({ type: authConstants.LOGIN_REQUEST, user });
// const success = (user) => ({ type: authConstants.LOGIN_SUCCESS, user });
const failure = (error) => ({ type: authConstants.LOGIN_FAILURE, error });

const loginAction = (username, password) => (dispatch) => {
  dispatch(request({ username }));
  loginService(username, password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.request.status === 404) {
        dispatch(failure(`actions/authActions/loginService ${error.request.status}`));
      }
    });
};

const logoutAction = () => {
  console.log('123');
};

export { loginAction, logoutAction };
