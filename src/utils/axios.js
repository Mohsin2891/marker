import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // You can add common headers or settings here
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Perform actions before request is sent
    // For example, adding an authentication token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // For example, redirecting to login on a 401 error
    if (error.response && error.response.status === 401) {
      // Handle 401 error
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
