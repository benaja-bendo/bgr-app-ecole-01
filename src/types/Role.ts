export type RoleType = 'root' | 'admin_school' | 'student' | 'teacher' | 'parent' | 'guest';

export type Role = {
    type: RoleType;
    permissions?: string[];
}