import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fashionkathmandu.com/',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
});
export default axiosInstance;
