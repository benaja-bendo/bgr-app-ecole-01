import {useEffect,useState} from 'react';
import { useQuery } from 'react-query';
import StudentService from "@/services/studentService.ts";
import {Student} from "@/types/Student.ts";

export function useGetAllStudent() {
const [students, setStudents] = useState<Student[]>([]);

  const { data, isLoading } = useQuery<Student[]>(
    "students",
    () => StudentService.getAllStudents(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setStudents(data);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setStudents(data);
    }
  }, [data]);

  return { students, isLoading };
}