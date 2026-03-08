import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const jobApi = {
  create: (data) => axios.post(`${API_BASE}/jobs`, data),
  getJobs: (category, status) => {
    let url = `${API_BASE}/jobs`;
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (status) params.append('status', status);
    if (params.toString()) url += `?${params.toString()}`;
    return axios.get(url);
  },
  getJobById: (id) => axios.get(`${API_BASE}/jobs/${id}`),
  updateJob: (id, data) => axios.patch(`${API_BASE}/jobs/${id}`, data),
  deleteJob: (id) => axios.delete(`${API_BASE}/jobs/${id}`),
};
