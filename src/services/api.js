import axios from 'axios';

export const baseURL = 'http://localhost:9091';

const api = axios.create({
  baseURL,
});

export default api;
