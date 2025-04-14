import axiosInstance from "../Configs/axiosConfig";
import { handleError } from "../ErrorHandlers/ErrorHandler";

export const fetchCustomOfCourses = async (customCourse: string) => {
  try {
    const response = await axiosInstance.get(`/courses/${customCourse}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchAllCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
