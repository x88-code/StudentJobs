import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const bookingApi = {
  create: (data) => axios.post(`${API_BASE}/bookings`, data),
  getFundiBookings: (fundiId) => axios.get(`${API_BASE}/bookings/${fundiId}`),
  getProfessionalBookings: (professionalId) => axios.get(`${API_BASE}/bookings/${professionalId}`),
};
