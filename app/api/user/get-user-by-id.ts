import api, { handleApiError } from "~/config/axios";

const GetUserById = async (user_id: string) => {
    try {
        const response = await api.get<any>(`/users/${user_id}`);
        return response.data;
    }
    catch (error) {
        handleApiError(error);
        throw error;
    }
};

export default GetUserById