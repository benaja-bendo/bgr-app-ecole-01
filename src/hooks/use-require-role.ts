import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCurrentUser} from '@/hooks/use-current-user';
import {RoleType} from '@/types/Role.ts';

export function useRequireRole(requiredRole: RoleType|RoleType[]) {
    const {currentUser} = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }

        const userRoles = Array.isArray(currentUser.role.type) ? currentUser.role.type : [currentUser.role.type];
        if (Array.isArray(requiredRole)) {
            if (!requiredRole.some(role => userRoles.includes(role))) {
                navigate('/');
            }
            return;
        }else {
            if(!userRoles.includes(requiredRole)) {
                navigate('/');
            }
        }

    }, [currentUser, requiredRole, navigate]);
}