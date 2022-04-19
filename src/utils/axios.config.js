import axios from 'axios';
import AuthHelpers from './AuthHelpers';

// export const signalRUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
export const signalRUrl = 'https://api.dev.useflik.com';
export const baseUrl = signalRUrl;

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  function (config) {
    const TOKEN = AuthHelpers.getAccessToken();
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

export default instance;
