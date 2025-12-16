import API from '../api/axios';

export const authService = {
  login: async (credentials) => {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await API.post('/auth/register', userData);
    return response.data;
  },

  getProfile: async () => {
    const response = await API.get('/users/profile');
    return response.data;
  }
};