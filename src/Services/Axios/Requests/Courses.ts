import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const fetchCustomOfCourses = async (customCourse: string) => {
  try {
    const res = await axiosInstance.get(`/courses/${customCourse}`);
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const fetchAllCourses = async () => {
  try {
    const res = await axiosInstance.get("/courses");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeCourse = async (courseID: string) => {
  try {
    const res = await axiosInstance.delete(`/courses/${courseID}`);
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const fetchNewCourse = async (formData: FormData) => {
  try {
    const res = await axiosInstance.post("/courses", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
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
    const res = await axiosInstance.post(
      `/courses/${sessionCourse}/sessions`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeSession = async (sessionID: string) => {
  try {
    const res = await axiosInstance.delete(
      `/courses/sessions/${sessionID}`
    );
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
