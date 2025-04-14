export const handleError = (error: any) => {
    if (error.response) {
      if (error.response?.status === 403) {
        console.error("Unauthorized! Redirecting to login...");
        // Redirecting to login page
      }
      console.error("Server Error:", error.response.data.message);
    } else if (error.request) {
      console.error("Network Error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  };