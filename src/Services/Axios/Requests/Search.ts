import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";



export const getSearchInfo = async (value: string) => {
    try {
      const response = await axiosInstance.get(`/search/${value}`);
      return response.data
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };