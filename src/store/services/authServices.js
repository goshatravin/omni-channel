import axios from 'axios';

const loginService = (username, password) => axios.post('http://localhost:4000/api/pages/login', {
  login: username,
  password,
})
  .then((response) => response);

const logoutService = () => {
  console.log('пусто');
};

export { loginService, logoutService };
