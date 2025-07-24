import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

interface ProtectedRouteProps {
  allowedRoles: string[]; // ex: ["superadmin", "admin-beatmaker"]
  children: ReactNode;
}

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { userRole, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
    if (!allowedRoles.includes(userRole || "")) {
      router.replace("/unauthorized");
    }
  }, [userRole, isAuthenticated, allowedRoles, router]);

  if (!isAuthenticated || !allowedRoles.includes(userRole || "")) {
    return null; // ou spinner / loader
  }

  return <>{children}</>;
}