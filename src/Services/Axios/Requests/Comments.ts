import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getComments = async () => {
  try {
    const response = await axiosInstance.get("/comments");
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};


export const removeComment = async (commentID: string) => {
    try {
        const response = await axiosInstance.delete(`/comments/${commentID}`)
        return response
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const acceptComment = async (commentID: string) => {
    try {
        const respone = await axiosInstance.put(`/comments/accept/${commentID}`)
        return respone
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const rejectComment = async (commentID: string) => {
    try {
        const respone = await axiosInstance.put(`/comments/reject/${commentID}`)
        return respone
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const answerToComment = async (commentID: string, Answer: object) => {
    try {
        const respone = await axiosInstance.post(`/comments/answer/${commentID}`, Answer)
        return respone
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const submitComment = async (commentBody: object) => {
    try {
        const respone = await axiosInstance.post("/comments", commentBody)
        return respone
    } catch (error) {
        errorHandler(error)
        throw error
    }
}