'use client';

import Footer from '@/components/footer';
import DashboardHeader from '@/components/header/dashboard-header';
import { AuthProvider } from '@/lib/auth-context';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DashboardHeader />
      <>{children}</>
      <Footer />
    </AuthProvider>
  );
}
