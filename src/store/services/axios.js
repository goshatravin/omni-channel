import axios from 'axios';

const ourRequest = axios.CancelToken.source();
export default axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
  withCredentials: true,
  cancelToken: ourRequest.token,
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});
