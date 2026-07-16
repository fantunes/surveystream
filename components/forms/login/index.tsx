'use client';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginForm({
  handleClose
}: {
  handleClose: () => void;
}) {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      handleClose();
      router.push('/dashboard');
    }
  }, [isAuthenticated, handleClose, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      login(email.trim(), password.trim());
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] text-white bg-gray-900 border border-white/10">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-white">Sign In / Register</DialogTitle>
        <DialogDescription className="text-gray-400">
          Enter any email and password to log in. They will be saved in your session.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleLogin} className="grid gap-4 py-6">
        <div className="grid gap-2">
          <label htmlFor="email-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-white/10 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="password-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Password
          </label>
          <input
            id="password-input"
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-white/10 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
          />
        </div>

        <Button
          type="submit"
          disabled={!email.trim() || !password.trim()}
          className="w-full h-12 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 mt-2 disabled:opacity-40"
        >
          Sign In
        </Button>
      </form>
    </DialogContent>
  );
}
