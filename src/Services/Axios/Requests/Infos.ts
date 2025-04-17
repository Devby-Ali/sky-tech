import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getPanelAdminInfos = async () => {
  try {
    const res = await axiosInstance.get("/infos/p-admin");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getIndexPageInfos = async () => {
    try {
      const res = await axiosInstance.get("/infos/index");
      return res.data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };