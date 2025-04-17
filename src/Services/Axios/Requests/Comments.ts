import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

export const getComments = async () => {
  try {
    const res = await axiosInstance.get("/comments");
    return res.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};


export const removeComment = async (commentID: string) => {
    try {
        const res = await axiosInstance.delete(`/comments/${commentID}`)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const acceptComment = async (commentID: string) => {
    try {
        const res = await axiosInstance.put(`/comments/accept/${commentID}`)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const rejectComment = async (commentID: string) => {
    try {
        const res = await axiosInstance.put(`/comments/reject/${commentID}`)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const answerToComment = async (commentID: string, Answer: object) => {
    try {
        const res = await axiosInstance.post(`/comments/answer/${commentID}`, Answer)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}

export const submitComment = async (commentBody: object) => {
    try {
        const res = await axiosInstance.post("/comments", commentBody)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}