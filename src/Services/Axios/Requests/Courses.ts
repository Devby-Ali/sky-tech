import axiosInstance from "../Configs/axiosConfig";
import { handleError } from "../ErrorHandlers/ErrorHandler";

export const fetchingCustomOfCourses = async (customCourse: string) => {
  try {
    const response = await axiosInstance.get(customCourse);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
