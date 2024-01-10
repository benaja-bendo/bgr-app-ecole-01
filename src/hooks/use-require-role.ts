import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCurrentUser} from '@/hooks/use-current-user';
import {RoleType} from '@/types/Role.ts';

export function useRequireRole(requiredRole: RoleType) {
    const {currentUser} = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }

        const userRoles = Array.isArray(currentUser.roles.type) ? currentUser.roles.type : [currentUser.roles.type];

        if (!userRoles.includes(requiredRole)) {
            navigate('/');
        }
    }, [currentUser, requiredRole, navigate]);
}