import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Auth from './containers/Auth';
import Dashboard from './containers/Omni';
import getTheme from './theme/theme';
import PrivateRoute from './helpers/privateRoute';
// import ThemeToggle from './helpers/themeToggle';

const App = (props) => {
  const [dark, setDark] = useState(false);
  const theme = getTheme(dark ? 'dark' : 'light');
  const { dispatch } = props;
  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeToggle setDark={setDark} value={dark} /> */}
      <Router>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route>
            <Dashboard path="/main" />
          </Route>
          {/* <PrivateRoute exact path="/main" dispatch={dispatch}>
            <Dashboard />
          </PrivateRoute> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}
const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
