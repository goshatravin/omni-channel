import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './containers/Auth';
import Dashboard from './containers/Main';
import PrivateRoute from './helpers/privateRoute';



const App = (props) => {
  const { loggedIn } = props;
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/main" component={Dashboard} loggedIn={loggedIn} />
        <Route path="/login" component={Auth} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { loggedIn } = state.auth;
  return {
    loggedIn,
  };
}
const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
