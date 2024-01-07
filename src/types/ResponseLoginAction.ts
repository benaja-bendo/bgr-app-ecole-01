import {Tuser} from "@/types/Tuser.ts";

export type ResponseLoginAction = {
    token: string,
    user: Tuser,
    tenant_id?: string,
    tenant_name?: string,
}