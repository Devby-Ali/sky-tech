import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getOffs = async () => {
  try {
    const res = await axiosInstance.get("/offs");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createOff = async (newOffInfos: object) => {
  try {
    const res = await axiosInstance.post("/offs", newOffInfos);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createDiscount = async (reqBody: object) => {
    try {
        const res = await axiosInstance.post("/offs/all", reqBody)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const removeOff = async (offID: string) => {
    try {
        const res = await axiosInstance.delete(`/offs/${offID}`)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}
