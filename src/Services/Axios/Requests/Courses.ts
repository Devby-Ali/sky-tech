import Course from "types/Courses.types";
import axiosInstance from "../Configs/axiosConfig";
import { handleError } from "../ErrorHandlers/ErrorHandler";

export const getCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getCourseDetails = async (courseName: string) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseName}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getRelatedCourses = async (courseName: string) => {
  try {
    const response = await axiosInstance.get(`/courses/related/${courseName}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const registerCourse = async (course: Course) => {
  try {
    const response = await axiosInstance.post(
      `courses/${course._id}/register`,
      { price: course.price }
    );
    return response;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
