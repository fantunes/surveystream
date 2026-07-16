'use client';

import {
  AlertCircle,
  Calendar,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  User,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------
interface RecordItem {
  userId: string;
  decryptedEmail: string;
  surveyId: string;
  timestamp: number;
  isMock?: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [authError, setAuthError] = useState('');

  // Auto-login from local storage for a better UX during development
  useEffect(() => {
    const saved = localStorage.getItem('ss_admin_auth');
    if (saved === 'SS0987') {
      setIsAuthenticated(true);
      setPassword('SS0987');
      fetchRecords('SS0987');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SS0987') {
      localStorage.setItem('ss_admin_auth', 'SS0987');
      setIsAuthenticated(true);
      setAuthError('');
      fetchRecords('SS0987');
    } else {
      setAuthError('Invalid password. Access denied.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ss_admin_auth');
    setIsAuthenticated(false);
    setRecords([]);
    setPassword('');
  };

  const fetchRecords = async (authPass?: string) => {
    const activePass = authPass || password || localStorage.getItem('ss_admin_auth') || '';
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/admin/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: activePass })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch transaction logs');

      setRecords(data.records || []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to query blockchain';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------------------------------------
  // Filtering & Stats calculation
  // -------------------------------------------------------------------------
  const filteredRecords = records.filter(
    (r) =>
      r.userId.toLowerCase().includes(search.toLowerCase()) ||
      r.decryptedEmail.toLowerCase().includes(search.toLowerCase()) ||
      r.surveyId.toLowerCase().includes(search.toLowerCase())
  );

  const uniqueUsersCount = new Set(records.map((r) => r.decryptedEmail)).size;
  const isMockData = records.some((r) => r.isMock);

  // -------------------------------------------------------------------------
  // Render Auth Screen
  // -------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-t-2xl" />

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-500/10 mb-4 border border-blue-500/20">
              <Lock className="text-blue-400 h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Panel Access</h1>
            <p className="text-gray-400 text-sm">
              Please enter the administrator password to view transaction records.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="password-input" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Administrator Password
              </label>
              <input
                id="password-input"
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-white/10 bg-gray-800/40 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono"
              />
            </div>

            {authError && (
              <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2.5 text-red-400 text-sm">
                <AlertCircle size={16} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              id="login-btn"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render Dashboard
  // -------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header bar */}
      <header className="border-b border-white/5 bg-gray-900/40 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <ShieldCheck className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              SurveyStream <span className="text-blue-400 font-medium text-sm ml-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase tracking-wider">Admin</span>
            </span>
          </div>

          <button
            onClick={handleLogout}
            id="logout-btn"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-gray-300 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-6 py-10 max-w-6xl">
        {/* Banner if using mock fallback */}
        {isMockData && (
          <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-start gap-3">
            <ShieldAlert className="text-yellow-500 h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-yellow-500 font-semibold text-sm">Demo / Offline Mode Active</h4>
              <p className="text-gray-400 text-xs mt-1">
                The smart contract is not yet configured or is unavailable in the environment file. Displaying locally generated mock transactions with simulated on-chain payload decryption.
              </p>
            </div>
          </div>
        )}

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">On-Chain Submissions</h1>
            <p className="text-gray-400 text-sm mt-1">
              Verify transaction audit trails and decrypt taker email records securely.
            </p>
          </div>

          <button
            onClick={() => fetchRecords()}
            disabled={loading}
            id="refresh-btn"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-900/10"
          >
            <RefreshCw size={15} className={`${loading ? 'animate-spin' : ''}`} />
            Refresh Ledger
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-gray-900/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-16 w-16 bg-blue-500/5 rounded-bl-3xl flex items-center justify-center text-blue-400">
              <TrendingUp size={24} />
            </div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Total Blockchain Logs</p>
            <h3 className="text-3xl font-black text-white mt-2">
              {loading ? '...' : records.length}
            </h3>
            <p className="text-gray-500 text-xs mt-2">Completions stored on-chain</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-16 w-16 bg-purple-500/5 rounded-bl-3xl flex items-center justify-center text-purple-400">
              <Users size={24} />
            </div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Unique Participants</p>
            <h3 className="text-3xl font-black text-white mt-2">
              {loading ? '...' : uniqueUsersCount}
            </h3>
            <p className="text-gray-500 text-xs mt-2">Distinct decrypted email profiles</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-16 w-16 bg-teal-500/5 rounded-bl-3xl flex items-center justify-center text-teal-400">
              <User size={24} />
            </div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">System Status</p>
            <h3 className="text-xl font-bold text-white mt-3.5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Connected
            </h3>
            <p className="text-gray-500 text-xs mt-2.5">
              {isMockData ? 'Polygon Amoy Faucet Simulation' : 'Live Polygon Amoy RPC'}
            </p>
          </div>
        </div>

        {/* Table & Filtering */}
        <div className="bg-gray-900/30 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {/* Table Header Filter controls */}
          <div className="p-5 border-b border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-900/20">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 h-4.5 w-4.5" />
              <input
                type="text"
                placeholder="Search by User ID, Email, or Survey..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/5 bg-gray-950/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <div className="text-xs text-gray-400 select-none">
              Showing {filteredRecords.length} of {records.length} records
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
                <LoaderSpinner />
                <span className="text-sm font-medium">Reading blockchain logs...</span>
              </div>
            ) : errorMsg ? (
              <div className="flex flex-col items-center justify-center py-16 text-center px-4">
                <AlertCircle className="text-red-400 h-10 w-10 mb-3" />
                <h4 className="text-white font-bold text-base">Failed to sync blockchain data</h4>
                <p className="text-gray-400 text-sm max-w-sm mt-1 mb-5">{errorMsg}</p>
                <button
                  onClick={() => fetchRecords(password)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : filteredRecords.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <Users className="h-10 w-10 mb-3 opacity-40" />
                <span className="text-sm">No transaction records found.</span>
              </div>
            ) : (
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900/40 text-gray-400 uppercase text-xs font-bold tracking-wider select-none border-b border-white/5">
                    <th className="py-4 px-6">User ID</th>
                    <th className="py-4 px-6">Decrypted Email Address</th>
                    <th className="py-4 px-6">Survey ID</th>
                    <th className="py-4 px-6">Date & Time</th>
                    <th className="py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRecords.map((record, index) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-4.5 px-6 font-mono text-gray-300 text-xs font-semibold">
                        {record.userId}
                      </td>
                      <td className="py-4.5 px-6 font-medium text-white">
                        {record.decryptedEmail}
                      </td>
                      <td className="py-4.5 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs uppercase tracking-wider">
                          Survey #{record.surveyId}
                        </span>
                      </td>
                      <td className="py-4.5 px-6 text-gray-400 text-xs">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="opacity-60" />
                          {new Date(record.timestamp).toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4.5 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Confirmed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple dynamic loader helper
function LoaderSpinner() {
  return (
    <div className="relative inline-flex">
      <div className="h-10 w-10 rounded-full border-3 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}
