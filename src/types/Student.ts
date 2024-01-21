import {Tuser} from "@/types/Tuser.ts";

export type Student = Tuser & {
    speciality?: string;
}