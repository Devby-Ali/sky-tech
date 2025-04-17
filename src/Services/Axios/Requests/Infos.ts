import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getPanelAdminInfos = async () => {
  try {
    const response = await axiosInstance.get("/infos/p-admin");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getIndexPageInfos = async () => {
    try {
      const response = await axiosInstance.get("/infos/index");
      return response.data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };