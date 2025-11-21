'use client';

import { useAuth } from '@/lib/auth-context';
import { Award, ChevronDown, Gamepad2, LayoutDashboard, LogOut, Menu, User, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect bg-gray-900/95 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img
              src="/img/logo-surveystream.png"
              alt="SurveyStream"
              className="h-10"
            />
            <span className="text-xl font-bold text-white">SurveyStream</span>
          </Link>

          {/* Desktop User Menu */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{user?.name}</div>
                <div className="text-xs text-gray-400">{user?.email}</div>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  userDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                {/* User Info Section */}
                <div className="px-4 py-3 border-b border-gray-700 bg-gray-800/50">
                  <div className="text-sm font-semibold text-white">{user?.name}</div>
                  <div className="text-xs text-gray-400">{user?.email}</div>
                </div>

                {/* Navigation Links */}
                <div className="py-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    href="/dashboard/surveys"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="font-medium">Surveys</span>
                  </Link>
                  <Link
                    href="/dashboard/games"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <Gamepad2 className="h-5 w-5" />
                    <span className="font-medium">Games</span>
                  </Link>
                  <Link
                    href="/dashboard/rewards"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <Award className="h-5 w-5" />
                    <span className="font-medium">Rewards</span>
                  </Link>
                </div>

                {/* Logout Section */}
                <div className="border-t border-gray-700 py-2">
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 space-y-4">
            {/* User Info - Mobile */}
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{user?.name}</div>
                <div className="text-xs text-gray-400">{user?.email}</div>
              </div>
            </div>

            {/* Navigation Links - Mobile */}
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/surveys"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Surveys
            </Link>
            <Link
              href="/dashboard/games"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Gamepad2 className="h-5 w-5" />
              Games
            </Link>
            <Link
              href="/dashboard/rewards"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Award className="h-5 w-5" />
              Rewards
            </Link>

            {/* Logout - Mobile */}
            <button
              onClick={logout}
              className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition py-2 w-full"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
