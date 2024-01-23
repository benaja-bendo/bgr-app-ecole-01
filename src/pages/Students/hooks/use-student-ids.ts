import {useMemo} from "react";
import {Student} from "@/types/Student.ts";


export function useStudentIds (students: Student[]): string[] {
    return useMemo(
        () => {
            return students.map((customer) => customer.id);
        },
        [students]
    );
}