import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import StudentService from "@/services/studentService.ts";
import {Student} from "@/types/Student.ts";

export function useGetAllStudent() {
    const [students, setStudents] = useState<Student[]>([]);

    const {data, isLoading} = useQuery<Student[]>({
        queryKey: ['students'],
        queryFn: () => StudentService.getAllStudents(),
        refetchOnWindowFocus: false,
    });


    useEffect(() => {
        if (data) {
            setStudents(data);
        }
    }, [data]);

    return {students, isLoading};
}