import {Customer} from "@/types/Customer.ts";
import {useMemo} from "react";
import {applyPagination} from "@/utils/apply-pagination.ts";

export function useCustomers  (data: Customer[], page: number, rowsPerPage: number): Customer[]  {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
}