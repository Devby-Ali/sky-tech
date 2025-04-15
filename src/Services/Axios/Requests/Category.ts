import axiosInstance from "../Configs/axiosConfig";
import { handleError } from "../ErrorHandlers/ErrorHandler";

export const updateCategory = async (categoryID: string, data: { title:string, name: string }) => {
    try {
        const response = await axiosInstance.put(`/category/${categoryID}`, data)
        return response
    } catch (error) {
        handleError(error)
        throw(error)
    }
}