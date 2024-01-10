export type RoleType = 'root' | 'admin' | 'student' | 'teacher' | 'parent' | 'guest';

export type Role = {
    type: RoleType | RoleType[];
    permissions?: string[];
}