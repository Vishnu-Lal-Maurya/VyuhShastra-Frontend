import axiosInstance from './axiosInstance';

export const signup = async (data) => {
  return await axiosInstance.post('/auth/signup', data);
};

export const login = async (data) => {
  return await axiosInstance.post('/auth/login', data);
};

export const getProtectedData = async () => {
  return await axiosInstance.get('/auth/protected');
};



