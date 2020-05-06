import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import authConstants from '../store/constants/Authconstants';

const success = (user) => ({ type: authConstants.LOGIN_SUCCESS, user });

const PrivateRoute = ({component: Component, path, ...rest }) => {
  axios.post(`http://localhost:4000/api/pages${path}`)
    .then((response) => {
      console.log('хуй', response);
    });
  const { loggedIn } = rest;
  console.log(rest);
  return (
    <Route path={path}
    render ={(props) =>
    loggedIn ? <Component {...props}/>
  : (<Redirect to='/login' />) } />
)
};
export default PrivateRoute;
