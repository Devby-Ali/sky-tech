import axios from "axios";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    if (localStorageData) {
      config.headers.Authorization = `Bearer ${localStorageData.token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    errorHandler(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
