'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password?: string) => {
    setUser({
      id: 'user-' + Math.floor(Math.random() * 100000),
      name: email.split('@')[0] || 'Survey User',
      email: email || 'user@example.com',
      password: password || ''
    });
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
