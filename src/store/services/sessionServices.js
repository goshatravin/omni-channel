// import axios from 'axios';

// axios.defaults.withCredentials = true;
// const sessionServices = (path) => {
//   return axios({
//     method: 'post',
//     url: `http://localhost:4000/api/pages${path}`,
//     headers: {
//       Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//   })
//     .then((response) => {
//       const { data } = response;
//       if (data.error) {
//         throw data.error;
//       }
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export default sessionServices;
