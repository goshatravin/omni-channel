// import axios from 'axios';
// import { Base64 } from 'js-base64';

// const loginServices = (login, password) => {
//   return axios({
//     method: 'post',
//     url: 'http://localhost:4000/api/pages/login',
//     headers: {
//       Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     data: {
//       login,
//       password,
//     },
//   })
//     .then((response) => {
//       const { data } = response;
//       if (data.error) {
//         throw data;
//       }
//       const { value } = response.data;
//       let encoded = [];
//       encoded = JSON.parse(Base64.decode(value));
//       return encoded;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export default loginServices;
