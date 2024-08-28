// src/services/api.js

import axios from 'axios';

// Cấu hình cơ bản cho axios
const api = axios.create({
  baseURL: 'https://localhost:8386', // Thay thế bằng URL API của bạn
});

export default api;
