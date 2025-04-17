import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const seeNotification = async (notficationID: string) => {
    try {
      const response = await axiosInstance.put(`/notifications/see/${notficationID}`);
      return response;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };