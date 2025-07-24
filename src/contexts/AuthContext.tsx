import React, { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "superadmin" | "admin-beatmaker" | "admin-artiste" | "user" | null;

interface AuthContextType {
  userRole: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (role: UserRole) => {
    setUserRole(role);
    // Ici tu peux ajouter stockage token, cookies, etc.
  };

  const logout = () => {
    setUserRole(null);
    // Nettoyage localStorage, cookies, etc.
  };

  const isAuthenticated = userRole !== null;

  return (
    <AuthContext.Provider value={{ userRole, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}