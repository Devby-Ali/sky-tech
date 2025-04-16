import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getOffs = async () => {
  try {
    const response = await axiosInstance.get("/offs");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createOff = async (newOffInfos: object) => {
  try {
    const response = await axiosInstance.post("/offs", newOffInfos);
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createDiscount = async (reqBody: object) => {
    try {
        const response = await axiosInstance.post("/offs/all", reqBody)
        return response
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const removeOff = async (offID: string) => {
    try {
        const response = await axiosInstance.delete(`/offs/${offID}`)
        return response
    } catch (error) {
        errorHandler(error)
        throw error
    }
}
