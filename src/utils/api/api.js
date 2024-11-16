import axios from "axios";

// const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const BASE_API_URL = 'https://cms-api-t3-lumoshive-academy.vercel.app';

// Create an instance of axios with the base URL and headers
const api = axios.create({
	baseURL: BASE_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
});

const apiService = {
    register: (data) => api.post('/api/register/', data),
    login: (data) => api.post('/api/login/', data),
}

export default apiService;