import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: import.meta.env.VITE_BACKEND_URL, // Flask API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});


// Add a request interceptor to attach token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
