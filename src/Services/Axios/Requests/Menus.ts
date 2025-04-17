import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getMenus = async () => {
  try {
    const res = await axiosInstance.get("/menus");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getAllMenus = async () => {
  try {
    const res = await axiosInstance.get("/menus/all");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeMenu = async (menuID: string) => {
  try {
    const res = await axiosInstance.delete(`/menus/${menuID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createMenu = async (newMenuInfo: object) => {
  try {
    const res = await axiosInstance.post("/menus", newMenuInfo);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
