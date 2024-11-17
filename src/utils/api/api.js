import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
// const BASE_API_URL = 'https://cms-api-t3-lumoshive-academy.vercel.app';

// Create an instance of axios with the base URL and headers
const api = axios.create({
  baseURL: BASE_API_URL,
});

const apiService = {
  register: (data) => api.post("/api/register/", data),
  login: (data) => api.post("/api/login/", data),
  addArticle: (data) =>
    api.post("/api/article/", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  editArticle: (id, data) =>
    api.put(`/api/article/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  getArticle: (params) => api.get(`/api/article?${params}`),
  getArticleDetail: (slug) => api.get(`/api/article/${slug}/`),
  deleteArticle: (id) =>
    api.delete(`/api/article/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),

  //Testimonials API Function START
  // -------------------------------------
  addTestimonial: (data) =>
    api.post("/api/testimonials/", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  // -------------------------------------
  editTestimonial: (id, data) =>
    api.put(`/api/testimonials/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  // -------------------------------------
  getTestimonial: () => api.get(`/api/testimonials/`),
  getTestimonialDetail: (id) =>
    api.get(`/api/testimonials/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  // -------------------------------------
  deleteTestimonial: (id) =>
    api.delete(`/api/testimonials/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  //Testimonials API Function END
};

export default apiService;
