import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Create an instance of axios with the base URL and headers
const api = axios.create({
	baseURL: BASE_API_URL
});

const apiService = {
    // Auth end point
    register: (data) => api.post('/api/register/', data),
    login: (data) => api.post('/api/login/', data),

    // Article end point
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

    // About end point
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

    // Expertise end point
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

    // Message end point
    getMessage: (params) => api.get(`/api/contact/?${params}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),

    // Team end point
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

    // What we do end point
    addWhatWeDo: (data) => api.post('/api/what-we-do/', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    editWhatWeDo: (id, data) => api.put(`/api/what-we-do/${id}/`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    getWhatWeDo: () => api.get(`/api/what-we-do/`),
    deleteWhatWeDo: (id) => api.delete(`/api/what-we-do/${id}/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}

export default apiService;