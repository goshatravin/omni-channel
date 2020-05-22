import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
  withCredentials: true,
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_SECRET_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});
