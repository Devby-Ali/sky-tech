import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getUsersTickets = async () => {
  try {
    const res = await axiosInstance.get("/tickets");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getUserTickets = async () => {
  try {
    const res = await axiosInstance.get("/tickets/user");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const setAnswerToTicket = async (ticketAnswerInfos: object) => {
  try {
    const res = await axiosInstance.post("/tickets/answer", ticketAnswerInfos);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getDepartments = async () => {
  try {
    const res = await axiosInstance.get("/tickets/departments");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getDepartmentsSub = async (departmentID: string) => {
  try {
    const res = await axiosInstance.get(`/tickets/departments-subs/${departmentID}`);
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const sendTicket = async (newTicketInfos: object) => {
  try {
    const res = await axiosInstance.post("/tickets", newTicketInfos);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getTicketAnswer = async (id: string) => {
  try {
    const res = await axiosInstance.get(`tickets/answer/${id}`);
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
