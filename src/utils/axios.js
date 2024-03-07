import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
});
// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Perform actions before request is sent
    // For example, adding an authorization token
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
instance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    // For example, redirecting to login if response status is 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Redirect to login or perform other actions
    }
    return Promise.reject(error);
  }
);

export default instance;
