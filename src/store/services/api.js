import axios from 'axios';

// export default axios.create({
//   baseURL: `${process.env.REACT_APP_URL}`,
//   withCredentials: true,
//   headers: {
//     Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
//     'Content-Type': 'application/json;charset=utf-8',
//   },
// });

// axios.defaults.withCredentials = true;
const Api = (path, method, data) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_URL}${path}`,
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    data,
  });
};
const Omnichannel = (path, method, data) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_URL_OMNICHANNEL}${path}`,
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    data,
  });
};
// const ReferenceBook = (method) => {
//   return axios({
//     method,
//     url: `${process.env.REACT_APP_URL_OMNICHANNEL}`,
//     headers: {
//       Authorization: `Basic ${process.env.REACT_APP_URL_REFERENCEBOOK}`,
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//   });
// };

export { Api, Omnichannel };
