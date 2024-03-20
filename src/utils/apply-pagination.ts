import {Customer} from "@/types/Customer.ts";

export function applyPagination(documents: Customer[], page: number, rowsPerPage: number): Customer[] {
    return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}