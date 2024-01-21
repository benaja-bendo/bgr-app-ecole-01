import HttpService from '@/services/HttpService.ts';
import {ResponseApi} from "@/types/ResponseApi.ts";
import {Student} from "@/types/Student.ts";
import configRoutes from "@/utils/config-routes.ts";

interface StudentServiceProps {
    getAllStudents(): Promise<Student[]>;
}

class StudentService implements StudentServiceProps {
    async getAllStudents() {
        try {
            const response = await HttpService.get<ResponseApi<Student[]>>(configRoutes.students.getAll);
            return response.data.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new StudentService();