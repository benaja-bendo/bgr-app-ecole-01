import {Tuser} from "@/types/Tuser.ts";

export type R_loginAction = {
    token: string,
    user: Tuser,
    tenant_id?: string,
    tenant_name?: string,
}