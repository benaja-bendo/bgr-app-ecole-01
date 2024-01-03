import {Customer} from "@/types/Customer.ts";
import {useMemo} from "react";


export function useCustomerIds (customers: Customer[]): string[] {
    return useMemo(
        () => {
            return customers.map((customer) => customer.id);
        },
        [customers]
    );
}