import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://141.148.206.219:3000',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
});
export default axiosInstance;
