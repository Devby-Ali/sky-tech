import Course from "types/Courses.types";
import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";
import Swal from "sweetalert2";
import axios from "axios";

export const registerCourse = async (course: Course) => {
  try {
    const res = await axiosInstance.post(
      `courses/${course._id}/register`,
      { price: course.price }
    );
    return res;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const registerOffs = async (
  course: Course,
  code: string,
  getCourseDetails: { (): Promise<void>; (): void }
) => {
  try {
    const detailsCode = await axiosInstance.post(`/offs/${code}`, {
      course: course._id,
    });
    const res = await axiosInstance.post(`courses/${course._id}/register`, {
      price: course.price - (course.price * detailsCode.data.percent) / 100,
    });
    if (res.statusText === "Created") {
      Swal.fire({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        getCourseDetails();
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      Swal.fire({
        title: "کد تخفیف معتبر نیست",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (axios.isAxiosError(error) && error.response?.status === 409) {
      Swal.fire({
        title: "کد تخفیف قبلا استفاده شده!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    errorHandler(error);
  }
};
