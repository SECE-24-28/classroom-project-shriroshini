import API from '../api/axios';

export const planService = {
  getPlans: async () => {
    const response = await API.get('/plans');
    return response.data;
  },

  getPlan: async (id) => {
    const response = await API.get(`/plans/${id}`);
    return response.data;
  }
};