import HttpService from '@/services/HttpService.ts';
import {ResponseApi} from "@/types/ResponseApi.ts";
import {Student, StudentCreateType, StudentImportType} from "@/types/Student.ts";
import configRoutes from "@/config/config-routes.ts";
import FileSaver from 'file-saver';
import {StudentUpdateType} from "@/types/StudentUpdateType.ts";

interface StudentServiceProps {
    getAllStudents(search?: string): Promise<Student[]>;

    getStudents(ids: number): Promise<Student>;

    createStudent(t: StudentCreateType): Promise<ResponseApi<Student> | undefined>;

    createStudentByFormData(t: FormData): Promise<ResponseApi<Student> | undefined>;

    deleteStudent(t: number | number[]): Promise<ResponseApi<Student> | undefined>;

    updateStudent(t: StudentUpdateType): Promise<ResponseApi<Student> | undefined>;

    exportStudents(): void;

    exportTemplateStudents(): void;

    importStudents(file: File): Promise<StudentImportType | undefined>;
}

class StudentService implements StudentServiceProps {
    async getAllStudents(search?: string) {
        try {
            if (!search) search = "";
            const response = await HttpService.get<ResponseApi<Student[]>>(configRoutes.students.getAll(search));
            return response.data.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getStudents(ids: number) {
        try {
            const response = await HttpService.get<ResponseApi<Student>>(configRoutes.students.get(ids));
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
                return response.data;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createStudentByFormData(formData: FormData) {
        try {
            const response = await HttpService.post<ResponseApi<Student>>(configRoutes.students.create, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                return response.data;
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
                return response.data;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateStudent(student: StudentUpdateType) {
        try {
            const response = await HttpService.patch<ResponseApi<Student>>(configRoutes.students.update(Number(student.id)), student);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async exportStudents() {
        try {
            const response = await HttpService.get<Blob>(configRoutes.students.exportStudent, {
                responseType: "blob"
            });
            if (response.status === 200) {
                const filename = 'students.xlsx';
                FileSaver.saveAs(new Blob([response.data]), filename);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async exportTemplateStudents() {
        try {
            const response = await HttpService.get<Blob>(configRoutes.students.exportTemplate, {
                responseType: "blob"
            });
            if (response.status === 200) {
                const filename = 'students_template.xlsx';
                FileSaver.saveAs(new Blob([response.data]), filename);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async importStudents(file: File) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await HttpService.post<ResponseApi<StudentImportType>>(configRoutes.students.importStudent, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                return response.data.data;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new StudentService();