import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-theta-six-22.vercel.app', // Example public API
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Set to true if you need to send cookies with requests
});

export default axiosInstance;