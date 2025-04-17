import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getOrders = async () => {
  try {
    const res = await axiosInstance.get("/orders");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};