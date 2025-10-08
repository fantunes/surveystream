'use client';

import { Dialog } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import LoginForm from '../forms/login';
import SignupForm from '../forms/signup';

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [whichForm, setWhichForm] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash.includes('#sign'));

      if (window.location.hash.includes('#sign')) {
        console.log(
          window.location.hash.includes('#sign-up') ? 'signup' : 'login'
        );

        setWhichForm(
          window.location.hash.includes('#sign-up') ? 'signup' : 'login'
        );
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (window.location.hash.includes('#sign')) {
      window.history.pushState('', document.title, window.location.pathname);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        handleClose();
        setIsOpen(!isOpen);
      }}
    >
      {whichForm === 'login' ? (
        <LoginForm handleClose={handleClose} />
      ) : (
        <SignupForm handleClose={handleClose} />
      )}
    </Dialog>
  );
}
