'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Mock authentication state - in a real app, this would come from an API
  const [user, setUser] = useState<User | null>(() => {
    // Check if we're on a dashboard/protected route to auto-login for demo
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/dashboard')) {
        return {
          id: '1',
          name: 'Sarah Johnson',
          email: 'sarah.j@example.com'
        };
      }
    }
    return null;
  });

  const login = (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    setUser({
      id: '1',
      name: 'Sarah Johnson',
      email: email
    });
  };

  const logout = () => {
    setUser(null);
    // In a real app, you'd also clear tokens, redirect, etc.
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
