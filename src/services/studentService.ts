import HttpService from '@/services/HttpService.ts';
import {ResponseApi} from "@/types/ResponseApi.ts";
import {Student, StudentCreateType} from "@/types/Student.ts";
import configRoutes from "@/utils/config-routes.ts";

interface StudentServiceProps {
    getAllStudents(): Promise<Student[]>;
    createStudent(t: StudentCreateType): Promise<string | undefined>;
    deleteStudent(t: number | number[]): Promise<string | undefined>;
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

    async createStudent({email, gender, last_name, first_name, birth_date}: StudentCreateType) {
        try {
            const response = await HttpService.post<ResponseApi<Student>>(configRoutes.students.create, {
                email,
                gender,
                last_name,
                first_name,
                birth_date
            });
            if (response.status === 201) {
                return response.data.message;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteStudent(student: number | number[]) {
        try {
            let response;
            if (Array.isArray(student)) {
                response = await HttpService.post<ResponseApi<Student>>(configRoutes.students.deletes, {
                    ids: student
                });
            } else {
                response = await HttpService.delete<ResponseApi<Student>>(configRoutes.students.delete(student));
            }
            if (response.status === 200) {
                return response.data.message;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new StudentService();