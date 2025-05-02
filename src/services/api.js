import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const token = JSON.parse(userInfo).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Breed API calls
export const fetchBreeds = async () => {
  try {
    const { data } = await api.get('/breeds');
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchBreedById = async (id) => {
  try {
    const { data } = await api.get(`/breeds/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Accessory API calls
export const fetchAccessories = async (category = 'all') => {
  try {
    const { data } = await api.get(`/accessories?category=${category}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchAccessoryById = async (id) => {
  try {
    const { data } = await api.get(`/accessories/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Blog API calls
export const fetchBlogs = async (category = 'all') => {
  try {
    const { data } = await api.get(`/blogs?category=${category}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchFeaturedBlogs = async () => {
  try {
    const { data } = await api.get('/blogs/featured');
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchBlogById = async (id) => {
  try {
    const { data } = await api.get(`/blogs/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Contact API calls
export const submitContactForm = async (formData) => {
  try {
    const { data } = await api.post('/contact', formData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// User API calls
export const login = async (email, password) => {
  try {
    const { data } = await api.post('/users/login', { email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const register = async (name, email, password) => {
  try {
    const { data } = await api.post('/users', { name, email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem('userInfo');
};

export const getUserProfile = async () => {
  try {
    const { data } = await api.get('/users/profile');
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const { data } = await api.put('/users/profile', userData);
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export default api;
