import axios from 'axios';
import { Base64 } from 'js-base64';

const loginServices = (login, password) => {
  return axios
    .post('http://localhost:4000/api/pages/login', {
      login,
      password,
    })
    .then((response) => {
      const { data } = response;
      if (data.error) {
        throw data;
      }
      const { value } = response.data;
      let encoded = [];
      encoded = JSON.parse(Base64.decode(value));
      return encoded;
    })
    .catch((error) => {
      throw error;
    });
};

export default loginServices;
