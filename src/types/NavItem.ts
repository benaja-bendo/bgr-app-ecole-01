import React from "react";
import {RoleType} from "@/types/Role.ts";

export type NavItem = {
    title: string;
    path: string;
    icon: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
    role?: RoleType | RoleType[];
}