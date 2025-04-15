import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getAllArticles = async () => {
  try {
    const response = await axiosInstance.get("/articles");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getArticleInfo = async (articleName: string) => {
  try {
    const response = await axiosInstance.get(`/articles/${articleName}`);
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const removeArticles = async (articleID: string) => {
  try {
    const respone = await axiosInstance.delete(`/articles/${articleID}`);
    return respone;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const createArticle = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post("/articles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const draftArticle = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post("/articles/draft", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const getDraftArticleInfo = async (shortName: string) => {
  try {
    const respone = await axiosInstance.get(`/articles/${shortName}`);
    return respone.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
