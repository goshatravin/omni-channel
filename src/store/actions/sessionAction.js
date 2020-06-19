import { Base64 } from 'js-base64';
import actionTypes from '../constants';
import axios from '../services/axios';

const sessionRequest = () => {
  return {
    type: actionTypes.SESSION_REQUEST,
  };
};
const sessionSuccess = (data) => {
  return {
    type: actionTypes.SESSION_SUCCESS,
    payload: {
      data,
    },
  };
};
const sessionFailure = (data) => {
  return {
    type: actionTypes.SESSION_FAILURE,
    payload: {
      data,
    },
  };
};
const sessionAuth = (path) => (dispatch) => {
  dispatch(sessionRequest());
  return axios(path, {
    method: 'POST',
  })
    .then(({ data }) => {
      if (data.error) {
        throw data;
      }
      const { value } = data;
      let encoded = [];
      encoded = JSON.parse(Base64.decode(value));
      dispatch(sessionSuccess(encoded));
    })
    .catch((error) => {
      dispatch(sessionFailure(error));
    });
};
export { sessionAuth, sessionRequest, sessionSuccess, sessionFailure };
// // const sessionUser = (path) => async (dispatch) => {
// //   dispatch({
// //     type: actionTypes.SESSION_REQUEST,
// //   });

// //   try {
// //     // const user = await sessionServices(path);
// //     const user = await Api(path, 'post')
// //       .then((response) => {
// //         console.log(response);
// //         const { data } = response;
// //         if (data.error) {
// //           throw data.error;
// //         }
// //         return data;
// //       })
// //       .catch((error) => {
// //         throw error;
// //       });
// //     dispatch({
// //       type: actionTypes.SESSION_SUCCESS,
// //       payload: {
// //         user,
// //       },
// //     });
// //   } catch (error) {
// //     dispatch({
// //       type: actionTypes.SESSION_FAILURE,
// //       payload: {
// //         error,
// //       },
// //     });
// //   }
// // };

// export default sessionUser;
