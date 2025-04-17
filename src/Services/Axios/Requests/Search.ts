import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";



export const getSearchInfo = async (value: string) => {
    try {
      const res = await axiosInstance.get(`/search/${value}`);
      return res.data
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };