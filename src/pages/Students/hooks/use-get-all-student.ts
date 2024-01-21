import {useEffect,useState} from 'react';
import StudentService from "@/services/studentService.ts";
import {Student} from "@/types/Student.ts";

export function useGetAllStudent() {
    const [loading, setLoading] = useState(true)
    const [dataStudent, setDataStudent] = useState<Student[]>([] as Student[])
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        setLoading(true)
        StudentService.getAllStudents()
            .then((res) => {
                setDataStudent(res)
                setLoading(false)
            })
            .catch((err) => {
                console.error('err', err)
                setErrors(err)
                setLoading(false)
            })
    }, []);

    return {
        loading, dataStudent, errors
    }
}