import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get("/category");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createNewCategory = async (newCategoryInfo: object) => {
  try {
    const res = await axiosInstance.post("/category", newCategoryInfo);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const updateCategory = async (categoryID: string, data: object) => {
  try {
    const res = await axiosInstance.put(`/category/${categoryID}`, data);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeCategory = async (categoryID: string) => {
  try {
    const res = await axiosInstance.delete(`/category/${categoryID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
