import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const seeNotification = async (notficationID: string) => {
    try {
      const res = await axiosInstance.put(`/notifications/see/${notficationID}`);
      return res;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };