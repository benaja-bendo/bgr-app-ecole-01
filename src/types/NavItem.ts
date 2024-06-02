import React from "react";
import {RoleType} from "@/types/Role.ts";

export type NavItem = {
    group?: 'General' | 'User Management' | 'School Management' | 'Settings' | 'Help' | 'Others' | 'Financial'
    title: string;
    path: string;
    icon: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
    role?: RoleType | RoleType[];
}