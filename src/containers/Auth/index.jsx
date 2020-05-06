import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import LogoComponent from '../../components/LogoComponents';
import { loginAction } from '../../store/actions/authActions';

const AuthBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Form = styled.form`
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const EmptyFiled = styled.div`
  background: #FF767E;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const PText = styled.p`
  color: white;
  font-size: 14px;
`;
const Auth = (props) => {
  const { dispatch } = props;
  const { error } = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (login && password) {
      dispatch(loginAction(login, password, props.history));
    } else {
      console.log('xuy');
    }
  };
  return (
    <AuthBlock>
      <LogoComponent />
      {submitted && (!login || !password) ? (
        <EmptyFiled>
          <PText>Поля Логин и Пароль должны быть не пустыми!</PText>
        </EmptyFiled>
      ) : (
        ''
      )}
      {submitted && (error !== '') ? (
        <EmptyFiled>
          <PText>{error}</PText>
        </EmptyFiled>
      ) : (
        ''
      )}
      <Form onSubmit={(e) => { submitForm(e); }}>
        <InputComponent
          validation={submitted}
          className="input-form"
          inputType="text"
          name="name"
          placeholder="Логин"
          controlFunc={(e) => { setLogin(e.target.value); }}
          value={login}
        />
        <InputComponent
          validation={submitted}
          className="input-form"
          inputType="password"
          name="password"
          placeholder="Пароль"
          controlFunc={(e) => { setPassword(e.target.value); }}
          value={password}
        />
        <ButtonComponent
          className="btn"
          type="submit"
          name="submit"
          value="Войти"
        />
      </Form>
    </AuthBlock>
  );
};

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Auth.defaultProps = {
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  console.log(state);
  const { loggedIn, user, error } = state.auth;
  return {
    loggedIn,
    user,
    error,
  };
};

const connectedAuth = connect(mapStateToProps)(Auth);
export default connectedAuth;
