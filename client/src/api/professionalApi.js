import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const professionalApi = {
  register: (data) => axios.post(`${API_BASE}/auth/register`, data),
  login: (phone, password) => axios.post(`${API_BASE}/auth/login`, { phone, password }),
  getProfessionals: () => axios.get(`${API_BASE}/professionals`),
};
