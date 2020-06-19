import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginContainer: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleValidation = (): boolean => {
    if (login.length === 0 || password.length === 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (handleValidation()) {
      console.log('To do action');
    } else {
      setError(true);
    }
  };

  const changeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <LoginComponent
      changeLogin={changeLogin}
      login={login}
      changePassword={changePassword}
      password={password}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};
export default LoginContainer;
