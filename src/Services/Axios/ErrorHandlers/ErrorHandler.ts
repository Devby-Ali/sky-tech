import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const errorHandler = (error: any) => {
  if (error.response) {
    if (error.response?.status === 403) {
      console.error("Unauthorized! Redirecting to login...");
      Toast.fire({
        icon: "error",
        title: "این شماره تماس مسدود شده",
        position: "top",
        width: "35%",
        padding: "2rem",
        heightAuto: false,
      });
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
