// import axios from 'axios';

// axios.defaults.withCredentials = true;
// const loggerServices = (error) => {
//   return axios({
//     method: 'post',
//     url: 'http://localhost:4000/api/pages/logger',
//     headers: {
//       Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     data: { error: true, text: error },
//   })
//     .then((response) => {
//       // const { data } = response;
//       console.log('loggerServices: ', response);
//       // if (data.error) {
//       //   throw data.error;
//       // }
//       // return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export default loggerServices;
