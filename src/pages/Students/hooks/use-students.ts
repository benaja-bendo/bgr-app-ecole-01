import {useMemo} from "react";
import {Student} from "@/types/Student.ts";

export function useStudents  (data: Student[], page: number, rowsPerPage: number): Student[]  {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [data, page, rowsPerPage]
    );
}

function applyPagination(documents: Student[], page: number, rowsPerPage: number): Student[] {
    return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}