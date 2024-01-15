import {FC, ReactNode} from "react";
import { useCurrentUser } from '@/hooks/use-current-user';
import { RoleType} from "@/types/Role.ts";

interface WithRoleProps {
  role: RoleType;
  children: ReactNode;
}

export const WithRole: FC<WithRoleProps> = ({ role, children }) => {
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return null;
  }

  const userRoles = Array.isArray(currentUser.roles.type) ? currentUser.roles.type : [currentUser.roles.type];

  if (!userRoles.includes(role)) {
    return null;
  }

  return <>{children}</>;
};