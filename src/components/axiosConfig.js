import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api', // Set the base URL for reqres API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
