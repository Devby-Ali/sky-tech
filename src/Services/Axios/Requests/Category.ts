import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get("/category");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createNewCategory = async (newCategoryInfo: object) => {
  try {
    const response = await axiosInstance.post("/category", newCategoryInfo);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const updateCategory = async (categoryID: string, data: object) => {
  try {
    const response = await axiosInstance.put(`/category/${categoryID}`, data);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeCategory = async (categoryID: string) => {
  try {
    const response = await axiosInstance.delete(`/category/${categoryID}`);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
