import axios from 'axios';

axios.defaults.withCredentials = true;
const sessionServices = (path) => {
  return axios({
    method: 'post',
    url: `http://localhost:4000/api/pages${path}`,
  })
    .then((response) => {
      const { data } = response;
      console.log(data);
      if (data.error) {
        throw data.error;
      }
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default sessionServices;
