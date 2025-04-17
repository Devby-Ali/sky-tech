import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";


export const addNewEmail = async (newEmail: object) => {
    try {
        const res = await axiosInstance.post("/newsletters", newEmail)
        return res
    } catch (error) {
        errorHandler(error)
        throw error
    }
}