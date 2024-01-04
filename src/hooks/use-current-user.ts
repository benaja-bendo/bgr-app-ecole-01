import {useEffect, useState} from "react";
import {Tuser} from "@/types/Tuser.ts";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<Tuser|null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);
  return {
    currentUser,
    isAuthenticated
  };
}