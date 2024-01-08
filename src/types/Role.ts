export type RoleType = 'admin' | 'user' | 'parent' | 'guest';

export type Role = {
    type: RoleType | RoleType[];
    permissions?: string[];
}