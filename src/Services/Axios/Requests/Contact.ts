import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getContact = async () => {
  try {
    const res = await axiosInstance.get("/contact");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const addNewContact = async (newContact: object) => {
  try {
    const res = await axiosInstance.post("/contact", newContact);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeContact = async (contactID: string) => {
  try {
    const res = await axiosInstance.delete(`/contact/${contactID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const sendAnwserToUser = async (anwserInfo: object) => {
  try {
    const res = await axiosInstance.post("/contact/answer", anwserInfo);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};