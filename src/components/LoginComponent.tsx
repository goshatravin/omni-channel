import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div``;
const Logo = Styled.div``;
const Form = Styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = Styled.input`
  background: ${(props: IStyled) => (props.dataError ? 'red' : '')};
`;
const InputSubmit = Styled.input``;
Input.displayName = 'input';
InputSubmit.displayName = 'inputSubmit';
Form.displayName = 'form';
Container.displayName = 'container';

type IProps = {
  changeLogin(event: React.ChangeEvent<HTMLInputElement>): void;
  login: string;
  changePassword(event: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  error: boolean;
};

type IStyled = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
  theme: any;
  dataError: boolean;
};
const LoginComponent: React.FC<IProps> = (props) => {
  const {
    changeLogin,
    login,
    changePassword,
    password,
    handleSubmit,
    error
  } = props;
  return (
    <Container>
      <Logo>Стаканчик.</Logo>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          dataError={error}
          name="login"
          onChange={(e) => changeLogin(e)}
          value={login}
          type="text"
          placeholder="ּИмя пользователя"
        />
        <Input
          dataError={error}
          name="password"
          onChange={(e) => changePassword(e)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
        <InputSubmit name="btn" type="submit" value="Войти" />
      </Form>
    </Container>
  );
};

LoginComponent.propTypes = {
  changeLogin: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default LoginComponent;
