'use client';

import {
  Award,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Gamepad2,
  Gift,
  TrendingUp,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export default function DashboardPageContents() {
  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    totalTokens: 3450,
    completedSurveys: 12,
    pendingSurveys: 3,
    loginStreak: 5,
    level: 'Silver',
    nextLevelTokens: 5000
  };

  const recentActivity = [
    {
      id: 1,
      type: 'survey',
      title: 'Mobile Banking App Experience',
      tokens: 750,
      status: 'completed',
      date: '2 hours ago'
    },
    {
      id: 2,
      type: 'survey',
      title: 'Weekly Shopping Habits',
      tokens: 350,
      status: 'completed',
      date: '1 day ago'
    },
    {
      id: 3,
      type: 'bonus',
      title: 'Daily Login Streak Bonus',
      tokens: 50,
      status: 'completed',
      date: 'Today'
    }
  ];

  const availableSurveys = [
    {
      id: 1,
      title: 'Streaming Service Preferences',
      category: 'Entertainment',
      tokens: 700,
      duration: '20 min',
      difficulty: 'Medium',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Coffee Preferences',
      category: 'Quick Poll',
      tokens: 100,
      duration: '3 min',
      difficulty: 'Easy',
      badge: 'Quick'
    },
    {
      id: 3,
      title: 'Financial Services Survey',
      category: 'Finance',
      tokens: 1200,
      duration: '25 min',
      difficulty: 'Hard',
      badge: 'High Reward'
    }
  ];

  const gamingSurveys = [
    {
      id: 1,
      title: 'Mobile Gaming Preferences 2024',
      platform: 'Mobile',
      tokens: 850,
      duration: '18 min',
      badge: 'High Reward',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Console Gaming Experience',
      platform: 'Console',
      tokens: 1200,
      duration: '25 min',
      badge: 'Premium',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Battle Royale Games Quick Poll',
      platform: 'Multi-platform',
      tokens: 200,
      duration: '5 min',
      badge: 'Quick',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Esports Viewing Habits',
      platform: 'Multi-platform',
      tokens: 750,
      duration: '18 min',
      badge: 'Trending',
      color: 'red'
    }
  ];

  const gamingStats = {
    available: 24,
    completed: 8,
    totalEarned: 6800
  };

  // Chart data
  const earningsData = [
    { day: 'Mon', tokens: 450, surveys: 2 },
    { day: 'Tue', tokens: 680, surveys: 3 },
    { day: 'Wed', tokens: 320, surveys: 1 },
    { day: 'Thu', tokens: 890, surveys: 4 },
    { day: 'Fri', tokens: 550, surveys: 2 },
    { day: 'Sat', tokens: 0, surveys: 0 },
    { day: 'Sun', tokens: 560, surveys: 2 }
  ];

  const categoryData = [
    { name: 'Technology', value: 35, color: '#3b82f6' },
    { name: 'Gaming', value: 28, color: '#8b5cf6' },
    { name: 'Finance', value: 20, color: '#10b981' },
    { name: 'Lifestyle', value: 12, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#6b7280' }
  ];

  const weeklyProgress = [
    { week: 'Week 1', completed: 3, tokens: 1200 },
    { week: 'Week 2', completed: 4, tokens: 1650 },
    { week: 'Week 3', completed: 2, tokens: 800 },
    { week: 'Week 4', completed: 3, tokens: 1300 }
  ];

  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, {userData.name}! 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Here's what's happening with your account today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Tokens */}
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20">
                <DollarSign className="text-blue-400 h-6 w-6" />
              </div>
              <span className="text-blue-400 text-sm font-semibold">
                = £{(userData.totalTokens / 100).toFixed(2)}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {userData.totalTokens.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Total Tokens</div>
            <Link
              href="/dashboard/rewards"
              className="mt-4 text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center"
            >
              Redeem Now <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Completed Surveys */}
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20">
                <CheckCircle className="text-green-400 h-6 w-6" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {userData.completedSurveys}
            </div>
            <div className="text-gray-400 text-sm">Surveys Completed</div>
            <div className="mt-4 text-green-400 text-sm font-semibold">
              +2 this week
            </div>
          </div>

          {/* Login Streak */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500/20">
                <Zap className="text-purple-400 h-6 w-6" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {userData.loginStreak} Days
            </div>
            <div className="text-gray-400 text-sm">Login Streak</div>
            <div className="mt-4 text-purple-400 text-sm font-semibold">
              +50 tokens today!
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border border-orange-500/30 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500/20">
                <Award className="text-orange-400 h-6 w-6" />
              </div>
              <span className="text-orange-400 text-sm font-semibold">
                {userData.level}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {Math.round((userData.totalTokens / userData.nextLevelTokens) * 100)}%
            </div>
            <div className="text-gray-400 text-sm">To Gold Level</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(userData.totalTokens / userData.nextLevelTokens) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Trend Chart */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              Earnings This Week
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={earningsData}>
                <defs>
                  <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  stroke="#9ca3af"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#9ca3af"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="tokens"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorTokens)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-400">
                Total this week: <span className="text-blue-400 font-bold">3,450 tokens</span>
              </div>
              <div className="text-gray-400">
                Avg per day: <span className="text-green-400 font-bold">493 tokens</span>
              </div>
            </div>
          </div>

          {/* Category Distribution Chart */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Survey Categories</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Progress Chart */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            Monthly Progress
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProgress}>
              <XAxis
                dataKey="week"
                stroke="#9ca3af"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#9ca3af"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Bar dataKey="completed" fill="#10b981" name="Surveys Completed" />
              <Bar dataKey="tokens" fill="#3b82f6" name="Tokens Earned" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Available Surveys & Rewards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Rewards Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">
                  Your Rewards
                </h2>
                <Link
                  href="/dashboard/rewards"
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center"
                >
                  View All <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Cash Payout Card */}
                <Link
                  href="/dashboard/rewards"
                  className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 p-6 rounded-xl hover:scale-105 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 mb-4">
                    <DollarSign className="text-green-400 h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    Cash Payout
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Convert to real money
                  </p>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    £{(userData.totalTokens / 100).toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500">Available now</div>
                </Link>

                {/* Gift Cards Card */}
                <Link
                  href="/dashboard/rewards"
                  className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 p-6 rounded-xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500/20 mb-4">
                    <Gift className="text-purple-400 h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Gift Cards
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    100+ popular brands
                  </p>
                  <div className="text-sm text-purple-400 font-semibold mb-1">
                    Up to 5% Bonus
                  </div>
                  <div className="text-xs text-gray-500">Instant delivery</div>
                </Link>

                {/* NFT Collectibles Card */}
                <Link
                  href="/dashboard/rewards"
                  className="bg-gradient-to-br from-blue-900/40 to-cyan-800/20 border border-blue-500/30 p-6 rounded-xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 mb-4">
                    <Award className="text-blue-400 h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    NFT Collectibles
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Exclusive digital art
                  </p>
                  <div className="text-sm text-blue-400 font-semibold mb-1">
                    From 1,000 tokens
                  </div>
                  <div className="text-xs text-gray-500">5 rarity tiers</div>
                </Link>
              </div>

              {/* Popular Redemptions */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-4">
                  Popular Redemptions
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20">
                      <span className="text-lg font-bold text-orange-400">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Amazon Gift Card</div>
                      <div className="text-gray-400 text-xs">£10 - £500 • +2% bonus</div>
                    </div>
                    <div className="text-orange-400 text-xs font-semibold">Popular</div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20">
                      <span className="text-lg font-bold text-green-400">£</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">PayPal Cash</div>
                      <div className="text-gray-400 text-xs">£5 minimum • 1-3 days</div>
                    </div>
                    <div className="text-green-400 text-xs font-semibold">Fast</div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20">
                      <span className="text-lg font-bold text-green-400">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Spotify Premium</div>
                      <div className="text-gray-400 text-xs">£10 - £50 • +5% bonus</div>
                    </div>
                    <div className="text-purple-400 text-xs font-semibold">+5%</div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20">
                      <span className="text-lg font-bold text-red-400">N</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Netflix Gift Card</div>
                      <div className="text-gray-400 text-xs">£10 - £100 • +3% bonus</div>
                    </div>
                    <div className="text-blue-400 text-xs font-semibold">+3%</div>
                  </div>
                </div>

                <Link
                  href="/dashboard/rewards"
                  className="mt-4 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Redeem Your Tokens <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Gaming Surveys Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Gaming Surveys
                  </h2>
                </div>
                <Link
                  href="/dashboard/games"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                >
                  View All <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Gaming Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-500/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Available</div>
                  <div className="text-2xl font-bold text-blue-400">{gamingStats.available}</div>
                  <div className="text-xs text-gray-500 mt-1">Gaming surveys</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-500/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Completed</div>
                  <div className="text-2xl font-bold text-green-400">{gamingStats.completed}</div>
                  <div className="text-xs text-gray-500 mt-1">This month</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Total Earned</div>
                  <div className="text-2xl font-bold text-purple-400">{gamingStats.totalEarned}</div>
                  <div className="text-xs text-gray-500 mt-1">Tokens from gaming</div>
                </div>
              </div>

              {/* Featured Gaming Surveys */}
              <div className="grid md:grid-cols-2 gap-4">
                {gamingSurveys.map((survey) => {
                  const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
                    blue: { bg: 'from-blue-900/40 to-blue-800/20', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                    purple: { bg: 'from-purple-900/40 to-purple-800/20', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                    orange: { bg: 'from-orange-900/40 to-orange-800/20', border: 'border-orange-500/30', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                    red: { bg: 'from-red-900/40 to-red-800/20', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20 text-red-400 border-red-500/30' }
                  };
                  const colors = colorClasses[survey.color];

                  return (
                    <div
                      key={survey.id}
                      className={`bg-gradient-to-br ${colors.bg} border ${colors.border} p-5 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`${colors.badge} border px-2 py-1 rounded-full text-xs font-semibold`}>
                              {survey.platform}
                            </span>
                            <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full text-xs font-semibold">
                              {survey.badge}
                            </span>
                          </div>
                          <h3 className={`text-base font-bold text-white mb-2 group-hover:${colors.text} transition-colors`}>
                            {survey.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {survey.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className={`text-xl font-bold ${colors.text}`}>
                            {survey.tokens}
                          </div>
                          <div className="text-xs text-gray-400">Tokens</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA to Gaming Page */}
              <Link
                href="/dashboard/games"
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Explore All Gaming Surveys <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Available Surveys Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">
                  Available Surveys
                </h2>
                <Link
                  href="/dashboard/surveys"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                >
                  View All <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

            <div className="space-y-4">
              {availableSurveys.map((survey) => (
                <div
                  key={survey.id}
                  className="glass-effect p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                          {survey.category}
                        </span>
                        {survey.badge && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                            {survey.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {survey.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {survey.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {survey.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">
                          {survey.tokens}
                        </div>
                        <div className="text-xs text-gray-400">Tokens</div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/dashboard/surveys"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Browse All Surveys
              </Link>
            </div>
            </div>
          </div>

          {/* Sidebar - Recent Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/dashboard/rewards"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg hover:border-green-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Gift className="text-green-400 h-5 w-5" />
                    <span className="text-white font-semibold">Redeem Rewards</span>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-green-400 h-5 w-5" />
                </Link>

                <Link
                  href="/dashboard/surveys"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-blue-400 h-5 w-5" />
                    <span className="text-white font-semibold">Browse Surveys</span>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-blue-400 h-5 w-5" />
                </Link>

                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all group">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-400 h-5 w-5" />
                    <span className="text-white font-semibold">View Profile</span>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-purple-400 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 pb-4 border-b border-gray-700 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500/20 flex-shrink-0">
                      <CheckCircle className="text-green-400 h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {activity.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{activity.date}</p>
                    </div>
                    <div className="text-green-400 font-bold text-sm whitespace-nowrap">
                      +{activity.tokens}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Bonus Card */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 p-6 rounded-xl text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500/20 mx-auto mb-4">
                <Zap className="text-yellow-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Daily Bonus Claimed!
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Come back tomorrow for another bonus
              </p>
              <div className="text-3xl font-bold text-yellow-400 mb-2">+50</div>
              <div className="text-gray-400 text-sm">Tokens Added</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
