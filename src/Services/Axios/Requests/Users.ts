import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getUserCourses = async () => {
  try {
    const response = await axiosInstance.get(`/users/courses`);
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const banUser = async (userID: string) => {
  try {
    const response = await axiosInstance.put(`/users/ban/${userID}`);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const changeRole = async (reqBodyInfos: object) => {
  try {
    const response = await axiosInstance.put("/users/role", reqBodyInfos);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeUser = async (userID: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${userID}`);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const editAccount = async (userNewInfos: object) => {
  try {
    const response = await axiosInstance.put("/users", userNewInfos);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
