import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getUserInfos = async () => {
    try {
      const res = await axiosInstance.get("/auth/me");
      console.log(res.data)
      return res.data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  export const loginUser = async (userData: object) => {
    try {
      const res = await axiosInstance.post("/auth/login", userData);
      console.log(res)
      return res.data.accessToken;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  export const getUserInfosLogin = async (accessToken: string) => {
    try {
      const res = await axiosInstance.get("/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(res.data)
      return res.data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };

  export const registerUser = async (newUserInfo: object) => {
    try {
      const res = await axiosInstance.post("/auth/register", newUserInfo);
      console.log(res)
      return res
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  };