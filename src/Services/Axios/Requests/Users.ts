import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getUsers = async () => {
  try {
    const res = await axiosInstance.get("/users");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getUserCourses = async () => {
  try {
    const res = await axiosInstance.get(`/users/courses`);
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const banUser = async (userID: string) => {
  try {
    const res = await axiosInstance.put(`/users/ban/${userID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const changeRole = async (reqBodyInfos: object) => {
  try {
    const res = await axiosInstance.put("/users/role", reqBodyInfos);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeUser = async (userID: string) => {
  try {
    const res = await axiosInstance.delete(`/users/${userID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const editAccount = async (userNewInfos: object) => {
  try {
    const res = await axiosInstance.put("/users", userNewInfos);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
