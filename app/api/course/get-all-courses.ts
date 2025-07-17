import api, { handleApiError } from "~/config/axios";

export interface Course {
    course_id: string;
    name: string;
    description: string;
}

interface CourseResponse {
    courses: Course[]
}

const GetCourses = async (): Promise<CourseResponse> => {
    try {
        const response = await api.get<CourseResponse>(
            `/courses`)
        return response.data;
    } catch (error) {
        handleApiError(error);
        return {
            courses: []
        };
    }
};

export default GetCourses;