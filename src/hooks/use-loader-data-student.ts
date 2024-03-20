import {useLoaderData} from "react-router-dom";
import {Student} from "@/types/Student.ts";

export const useLoaderDataStudent = () => {
    return useLoaderData() as Student;
}