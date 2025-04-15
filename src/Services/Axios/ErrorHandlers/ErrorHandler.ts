import Swal from "sweetalert2";

export const errorHandler = (error: any) => {
  if (error.response) {
    if (error.response?.status === 403) {
      console.error("Unauthorized! Redirecting to login...");
      // Redirecting to login page
    } else if (error.response?.status === 401) {
      Swal.fire({
        title: "مقاله با این لینک از قبل منتشر شده! لطفا لینک مقاله رو عوض کن",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (error.response?.status === 400) {
      Swal.fire({
        title: "تمامی فیلد ها اجباری هستن",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    console.error("Server Error:", error.response.data.message);
  } else if (error.request) {
    console.error("Network Error:", error.message);
  } else {
    console.error("Error:", error.message);
  }
};
