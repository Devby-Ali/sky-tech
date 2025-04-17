import axiosInstance from "../Configs/axiosConfig";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";


export const addNewEmail = async (newEmail: object) => {
    try {
        const response = await axiosInstance.post("/newsletters", newEmail)
        console.log(response)
        return response
    } catch (error) {
        errorHandler(error)
        throw error
    }
}