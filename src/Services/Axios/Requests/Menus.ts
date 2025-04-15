import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getMenus = async () => {
  try {
    const response = await axiosInstance.get("/menus");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getAllMenus = async () => {
  try {
    const response = await axiosInstance.get("/menus/all");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeMenu = async (menuID: string) => {
  try {
    const respone = await axiosInstance.delete(`/menus/${menuID}`);
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createMenu = async (newMenuInfo: object) => {
  try {
    const respone = await axiosInstance.post("/menus", newMenuInfo);
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
