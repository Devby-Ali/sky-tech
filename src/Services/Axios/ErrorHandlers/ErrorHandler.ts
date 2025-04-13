export const handleError = (error: any) => {
    if (error.response) {
      console.error("Server Error:", error.response.data.message);
    } else if (error.request) {
      console.error("Network Error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  };