import {Role} from "@/types/Role.ts";

export type Tuser = {
    id: string;
    address: {
        city: string;
        country: string;
        state: string;
        street: string;
        postal_code: string;
    };
    avatar: string;
    created_at: string;
    updated_at: string;
    email: string;
    gender: string;
    birth_date: string;
    email_verified_at: string;
    last_name: string;
    first_name: string;
    middle_names: string;
    phone: {
        number: string;
        type: string;
    };
    role: Role
}