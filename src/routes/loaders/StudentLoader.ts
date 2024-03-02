import type {LoaderFunctionArgs} from "react-router-dom";
import StudentService from "@/services/studentService.ts";

export function StudentLoader({ params,request }: LoaderFunctionArgs) {
    if (request.method === "GET" && params.id) {
        return getStudent(Number(params.id));
    }
    return {id: params.id, method: request.method};
}

function getStudent(id: number) {
    return StudentService.getStudents(id);
}