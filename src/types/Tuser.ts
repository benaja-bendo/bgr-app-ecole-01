import {Role} from "@/types/Role.ts";
import {Address} from "@/types/Address.ts";
import {NumberPhone} from "@/types/NumberPhone.ts";

export type Tuser = {
    id: string;
    addresses: Address[] | null;
    number_phones: NumberPhone[] | null;
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
    role: Role
}