import {Role} from "@/types/Role.ts";

export type Tuser = {
    id: string;
    address: {
        city: string;
        country: string;
        state: string;
        street: string;
    };
    avatar: string;
    createdAt: number;
    email: string;
    name: string;
    phone: string;
    roles: Role
}