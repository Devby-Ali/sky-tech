import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const fetchCustomOfCourses = async (customCourse: string) => {
  try {
    const response = await axiosInstance.get(`/courses/${customCourse}`);
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const fetchAllCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeCourse = async (courseID: string) => {
  try {
    const respone = await axiosInstance.delete(`/courses/${courseID}`);
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const fetchNewCourse = async (formData: FormData) => {
  try {
    const respone = await axiosInstance.post("/courses", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const fetchNewSession = async (
  sessionCourse: string,
  formData: FormData
) => {
  try {
    const respone = await axiosInstance.post(
      `/courses/${sessionCourse}/sessions`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeSession = async (sessionID: string) => {
  try {
    const respone = await axiosInstance.delete(
      `/courses/sessions/${sessionID}`
    );
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
