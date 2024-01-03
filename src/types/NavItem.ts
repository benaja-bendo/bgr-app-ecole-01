import React from "react";

export type NavItem = {
    title: string;
    path: string;
    icon: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
}