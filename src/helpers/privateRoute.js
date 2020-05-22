import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sessionAuth } from '../store/actions/sessionAction';
import Loading from './Loading';

// const Loading = () => {
//   return <div className="lol"> ЗАГРУЗКА</div>;
// };

function PrivateRoute({ children, ...rest }) {
  const { loggedIn, dispatch, path } = rest;
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    if (!loggedIn) {
      setSpinner(true);
      dispatch(sessionAuth(path));
      setTimeout(() => {
        setSpinner(false);
      }, 1000);
    }
  }, []);
  if (loggedIn && !spinner) {
    return (
      <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={({ location }) =>
          rest.loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  return <Loading />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  const { loggedIn } = state.loginReducer;
  return {
    loggedIn,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
