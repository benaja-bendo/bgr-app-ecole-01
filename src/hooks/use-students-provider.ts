import {useContext} from 'react';
import {Student} from "@/types/Student.ts";
import {StudentProvider} from "@/providers/studentProvider.tsx";
import {useQuery} from "@tanstack/react-query";
import StudentService from "@/services/studentService.ts";
import ConfigQueryKey from "@/utils/config-query-key.ts";

export const useStudentProvider = (search?: string) => {
    const {students} = useContext(StudentProvider);
    const query = useQuery<Student[]>({
        queryKey: search || "" ? [...ConfigQueryKey.STUDENTS, search] : [...ConfigQueryKey.STUDENTS],
        queryFn: () => StudentService.getAllStudents(search),
        refetchOnWindowFocus: false,
        initialData: students ?? [],
    });
    return {...query};
}