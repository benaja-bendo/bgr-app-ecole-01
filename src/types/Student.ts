import {Tuser} from "@/types/Tuser.ts";

export type Student = Tuser & {
    speciality?: string;
}

export type StudentCreateType = {
    email: string;
    first_name: string;
    last_name: string;
    gender: string;
    birth_date: string | null;
}

export type StudentCreateTypeExtended = StudentCreateType & {
    [key: number]: null | string;
}

export type StudentImportType = {
    students: StudentCreateTypeExtended[][];
}