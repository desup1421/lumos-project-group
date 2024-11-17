import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Create an instance of axios with the base URL and headers
const api = axios.create({
	baseURL: BASE_API_URL
});

const apiService = {
    register: (data) => api.post('/api/register/', data),
    login: (data) => api.post('/api/login/', data),
    addArticle: (data) => api.post('/api/article/', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    editArticle: (id, data) => api.put(`/api/article/${id}/`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    getArticle: (params) => api.get(`/api/article?${params}`),
    getArticleDetail: (slug) => api.get(`/api/article/${slug}/`),
    deleteArticle: (id) => api.delete(`/api/article/${id}/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    addAbout: (data) => api.post('/api/about-us/', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    editAbout: (data) => api.put(`/api/about-us/`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    getAbout: () => api.get(`/api/about-us/`),
    addExpertise: (data) => api.post('/api/expertise/', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    editExpertise: (id, data) => api.put(`/api/expertise/${id}/`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    getExpertise: (params) => api.get(`/api/expertise/?${params}`),
    getMessage: (params) => api.get(`/api/contact/?${params}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    getTeam: (params) => api.get(`/api/team/?${params}`),
    addTeam: (data) => api.post('/api/team/', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    editTeam: (id, data) => api.put(`/api/team/${id}/`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    deleteTeam: (id) => api.delete(`/api/team/${id}/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}

export default apiService;