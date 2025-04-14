import Course from "types/Courses.types";
import axiosInstance from "../Configs/axiosConfig";
import { handleError } from "../ErrorHandlers/ErrorHandler";
import Swal from "sweetalert2";
import { registerCourse } from "./Courses";
import axios from "axios";

export const registerOffs = async (
  course: Course,
  code: string,
  getCourseDetails: { (): Promise<void>; (): void; }
) => {
  try {
    await axiosInstance.post(`/offs/${code}`, {
      course: course._id,
    });
    const res = await registerCourse(course);
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
    handleError(error);
  }
};
