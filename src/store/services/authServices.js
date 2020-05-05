import axios from 'axios';

const loginService = (username, password) => axios.post('#', {
  user_login: username,
  user_password: password,
})
  .then((response) => response);

const logoutService = () => {
  console.log('пусто');
};

export { loginService, logoutService };
