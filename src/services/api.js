import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
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
  },
);

// Breed API calls
export const fetchBreeds = async () => {
  try {
    const { data } = await api.get("/breeds");
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

export const createBreed = async (breedData) => {
  try {
    const { data } = await api.post("/breeds", breedData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateBreed = async (id, breedData) => {
  try {
    const { data } = await api.put(`/breeds/${id}`, breedData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteBreed = async (id) => {
  try {
    const { data } = await api.delete(`/breeds/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Accessory API calls
export const fetchAccessories = async (category = "all") => {
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

export const createAccessory = async (accessoryData) => {
  try {
    const { data } = await api.post("/accessories", accessoryData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateAccessory = async (id, accessoryData) => {
  try {
    const { data } = await api.put(`/accessories/${id}`, accessoryData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteAccessory = async (id) => {
  try {
    const { data } = await api.delete(`/accessories/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Blog API calls
export const fetchBlogs = async (category = "all") => {
  try {
    const { data } = await api.get(`/blogs?category=${category}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchFeaturedBlogs = async () => {
  try {
    const { data } = await api.get("/blogs/featured");
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

export const createBlog = async (blogData) => {
  try {
    const { data } = await api.post("/blogs", blogData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const { data } = await api.put(`/blogs/${id}`, blogData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteBlog = async (id) => {
  try {
    const { data } = await api.delete(`/blogs/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Contact API calls
export const submitContactForm = async (formData) => {
  try {
    const { data } = await api.post("/contact", formData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getContactMessages = async () => {
  try {
    const { data } = await api.get("/contact");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateContactStatus = async (id, status) => {
  try {
    const { data } = await api.put(`/contact/${id}`, { status });
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteContactMessage = async (id) => {
  try {
    const { data } = await api.delete(`/contact/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Newsletter API calls
export const subscribeNewsletter = async (email) => {
  try {
    const { data } = await api.post("/newsletter", { email });
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getNewsletterSubscriptions = async () => {
  try {
    const { data } = await api.get("/newsletter");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateNewsletterStatus = async (id, status) => {
  try {
    const { data } = await api.put(`/newsletter/${id}`, { status });
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteNewsletterSubscription = async (id) => {
  try {
    const { data } = await api.delete(`/newsletter/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// User API calls
export const login = async (email, password) => {
  try {
    const { data } = await api.post("/users/login", { email, password });
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const { data } = await api.put(`/users/${id}`, userData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const register = async (name, email, password) => {
  try {
    const { data } = await api.post("/users", { name, email, password });
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("userInfo");
};

export const getUserProfile = async () => {
  try {
    const { data } = await api.get("/users/profile");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const { data } = await api.put("/users/profile", userData);
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Order API calls
export const createOrder = async (orderData) => {
  try {
    const { data } = await api.post("/orders", orderData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getOrderDetails = async (id) => {
  try {
    const { data } = await api.get(`/orders/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const payOrder = async (orderId, paymentResult) => {
  try {
    const { data } = await api.put(`/orders/${orderId}/pay`, paymentResult);
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getMyOrders = async () => {
  try {
    const { data } = await api.get("/orders/myorders");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const getAllOrders = async () => {
  try {
    const { data } = await api.get("/orders");
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const { data } = await api.put(`/orders/${orderId}/status`, { status });
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deliverOrder = async (orderId) => {
  try {
    const { data } = await api.put(`/orders/${orderId}/deliver`, {});
    return data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export default api;
