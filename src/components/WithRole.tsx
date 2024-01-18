import {FC, ReactNode} from "react";
import { useCurrentUser } from '@/hooks/use-current-user';
import { RoleType} from "@/types/Role.ts";

interface WithRoleProps {
  role: RoleType | RoleType[];
  children: ReactNode;
}

export const WithRole: FC<WithRoleProps> = ({ role, children }) => {
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return null;
  }

  const userRoles = Array.isArray(currentUser.role.type) ? currentUser.role.type : [currentUser.role.type];

  if (Array.isArray(role)) {
    if (!userRoles.some(userRole => role.includes(userRole))) {
      return null;
    }
  } else {
    if (!userRoles.includes(role)) {
      return null;
    }
  }

  return <>{children}</>;
};