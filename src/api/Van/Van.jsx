import axios from 'axios';
const van = axios.create({
    baseURL: `http://localhost:4000`
})
export const VansAPI = {
  fetchVans: async () => {
    const response = await van.get(`/vans`);
    return response.data;
  },
  fetchVanById: async (id) => {
    const response = await van.get(`/vans/${id}`);
    return response.data;
  },
  createVan: async (item) => {
    const response = await van.post(`/vans`, item);
    return response.data;
  },
  updateVan: async (id, item) => {
    const response = await van.put(`/vans/${id}`, item);
    return response.data;
  },
  deleteVan: async (id) => {
    const response = await van.delete(`/vans/${id}`);
    return response.data;
  },
};


