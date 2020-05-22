import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorComponent from '../../components/ErrorComponents';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import LogoComponent from '../../components/LogoComponents';
import { authUser } from '../../store/actions/loginAction';
import errorAction from '../../store/actions/ui/errorAction';
import Div from '../../components/layout/Flexbox';
import FormBox from '../../components/layout/Form';

const Auth = (props) => {
  const { dispatch, loggedIn, error } = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (login.length > 2 && password.length > 2) {
      dispatch(authUser(login, password));
    } else {
      dispatch(errorAction());
    }
  };
  if (!loggedIn) {
    return (
      <Div className="login" direction="column">
        <LogoComponent />
        <ErrorComponent submitted={submitted} error={error} />
        <FormBox
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <InputComponent
            error={error}
            validation={submitted}
            className="input-form"
            inputType="text"
            name="name"
            placeholder="Логин"
            controlFunc={(e) => {
              setLogin(e.target.value);
            }}
            value={login}
          />
          <InputComponent
            error={error}
            validation={submitted}
            className="input-form"
            inputType="password"
            name="password"
            placeholder="Пароль"
            controlFunc={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <ButtonComponent
            className="btn"
            type="submit"
            name="submit"
            value="Войти"
          />
        </FormBox>
      </Div>
    );
  }
  return <Redirect to="/main" />;
};

Auth.propTypes = {
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    error: PropTypes.bool,
    status: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
  }),
};

Auth.defaultProps = {
  error: null,
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  console.log(state);
  const { loggedIn, error } = state.loginReducer;
  return {
    loggedIn,
    error,
  };
};

const connectedAuth = connect(mapStateToProps)(Auth);
export default connectedAuth;
