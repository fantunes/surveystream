'use client';

import { useAuth } from '@/lib/auth-context';
import {
  ChevronRight,
  Clock,
  Gamepad2,
  Monitor,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

export default function DashboardGamesPageContents() {
  const { user } = useAuth();

  const gameSurveys = [
    {
      id: 1,
      title: 'Mobile Gaming Preferences 2024',
      platform: 'Mobile',
      tokens: 850,
      duration: '18 min',
      difficulty: 'Medium',
      badge: 'High Reward',
      description: 'Share your mobile gaming habits and favorite game genres',
      icon: Smartphone,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Console Gaming Experience',
      platform: 'Console',
      tokens: 1200,
      duration: '25 min',
      difficulty: 'Hard',
      badge: 'Premium',
      description: 'Tell us about your console gaming setup and preferences',
      icon: Gamepad2,
      color: 'purple'
    },
    {
      id: 3,
      title: 'PC Gaming Hardware Survey',
      platform: 'PC',
      tokens: 950,
      duration: '20 min',
      difficulty: 'Medium',
      badge: 'Popular',
      description: 'Share details about your PC gaming rig and performance',
      icon: Monitor,
      color: 'green'
    },
    {
      id: 4,
      title: 'Battle Royale Games Quick Poll',
      platform: 'Multi-platform',
      tokens: 200,
      duration: '5 min',
      difficulty: 'Easy',
      badge: 'Quick',
      description: 'Quick questions about your favorite battle royale games',
      icon: Target,
      color: 'orange'
    },
    {
      id: 5,
      title: 'Gaming Subscription Services',
      platform: 'Multi-platform',
      tokens: 600,
      duration: '15 min',
      difficulty: 'Easy',
      badge: 'New',
      description: 'Your experience with Game Pass, PS Plus, and other services',
      icon: Star,
      color: 'yellow'
    },
    {
      id: 6,
      title: 'Esports Viewing Habits',
      platform: 'Multi-platform',
      tokens: 750,
      duration: '18 min',
      difficulty: 'Medium',
      badge: 'Trending',
      description: 'How you watch and engage with competitive gaming',
      icon: Trophy,
      color: 'red'
    },
    {
      id: 7,
      title: 'In-Game Purchase Behavior',
      platform: 'Multi-platform',
      tokens: 900,
      duration: '22 min',
      difficulty: 'Medium',
      badge: null,
      description: 'Share your thoughts on microtransactions and in-game purchases',
      icon: Zap,
      color: 'purple'
    },
    {
      id: 8,
      title: 'VR Gaming Experience',
      platform: 'VR',
      tokens: 1100,
      duration: '20 min',
      difficulty: 'Hard',
      badge: 'High Reward',
      description: 'Your virtual reality gaming experiences and preferences',
      icon: Gamepad2,
      color: 'blue'
    }
  ];

  const platforms = [
    { name: 'All Platforms', count: 24, active: true },
    { name: 'Mobile', count: 8, active: false },
    { name: 'PC', count: 6, active: false },
    { name: 'Console', count: 5, active: false },
    { name: 'VR', count: 3, active: false },
    { name: 'Multi-platform', count: 2, active: false }
  ];

  const stats = {
    available: 24,
    completed: 8,
    totalEarned: 6800,
    avgReward: 850
  };

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'from-blue-900/40 to-blue-800/20', border: 'border-blue-500/30', text: 'text-blue-400' },
    purple: { bg: 'from-purple-900/40 to-purple-800/20', border: 'border-purple-500/30', text: 'text-purple-400' },
    green: { bg: 'from-green-900/40 to-green-800/20', border: 'border-green-500/30', text: 'text-green-400' },
    orange: { bg: 'from-orange-900/40 to-orange-800/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    yellow: { bg: 'from-yellow-900/40 to-yellow-800/20', border: 'border-yellow-500/30', text: 'text-yellow-400' },
    red: { bg: 'from-red-900/40 to-red-800/20', border: 'border-red-500/30', text: 'text-red-400' }
  };

  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Gamepad2 className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Gaming Surveys
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Share your gaming experiences and earn premium rewards
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Available</div>
              <Gamepad2 className="text-blue-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.available}</div>
            <div className="text-xs text-blue-400 mt-1">Gaming surveys</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Completed</div>
              <Trophy className="text-green-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.completed}</div>
            <div className="text-xs text-green-400 mt-1">This month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Total Earned</div>
              <Star className="text-purple-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.totalEarned}</div>
            <div className="text-xs text-purple-400 mt-1">Tokens from gaming</div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border border-orange-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Avg. Reward</div>
              <TrendingUp className="text-orange-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.avgReward}</div>
            <div className="text-xs text-orange-400 mt-1">Tokens per survey</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Target className="text-blue-400 h-5 w-5" />
                <h3 className="text-lg font-bold text-white">Filters</h3>
              </div>

              {/* Platforms */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Platform</h4>
                <div className="space-y-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform.name}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        platform.active
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <span className="text-sm font-medium">{platform.name}</span>
                      <span className="text-xs">{platform.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Game Genres */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Genre</h4>
                <div className="space-y-2">
                  {['Action', 'RPG', 'Strategy', 'Sports', 'Casual', 'MMO'].map((genre) => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-blue-500" />
                      <span className="text-sm text-gray-300">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reward Range */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Reward Range</h4>
                <div className="space-y-2">
                  {['< 500 tokens', '500-1000', '1000-1500', '1500+'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-blue-500" />
                      <span className="text-sm text-gray-300">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Surveys List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {gameSurveys.map((survey) => {
                const Icon = survey.icon;
                const colors = colorClasses[survey.color];

                return (
                  <div
                    key={survey.id}
                    className={`bg-gradient-to-br ${colors.bg} border ${colors.border} p-6 rounded-xl hover:border-opacity-70 transition-all duration-300 group`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1 flex gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border}`}>
                          <Icon className={`h-6 w-6 ${colors.text}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`${colors.bg} ${colors.text} border ${colors.border} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
                              {survey.platform}
                            </span>
                            {survey.badge && (
                              <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                                {survey.badge}
                              </span>
                            )}
                          </div>
                          <h3 className={`text-xl font-semibold text-white mb-2 group-hover:${colors.text} transition-colors`}>
                            {survey.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{survey.description}</p>
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
                      </div>

                      {/* Action */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${colors.text}`}>
                            {survey.tokens}
                          </div>
                          <div className="text-xs text-gray-400">Tokens</div>
                        </div>
                        <button className={`bg-gradient-to-r ${colors.bg} hover:opacity-80 ${colors.text} border ${colors.border} px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2`}>
                          Start
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                <Gamepad2 className="h-5 w-5" />
                Load More Gaming Surveys
              </button>
            </div>

            {/* Gaming Tips */}
            <div className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                Gaming Survey Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Be Specific</h4>
                    <p className="text-gray-400 text-sm">Provide detailed information about your gaming setup and preferences</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Share Honestly</h4>
                    <p className="text-gray-400 text-sm">Your genuine gaming experiences help developers create better games</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Check Regularly</h4>
                    <p className="text-gray-400 text-sm">New gaming surveys are added weekly based on trending games</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Higher Rewards</h4>
                    <p className="text-gray-400 text-sm">Gaming surveys often offer premium rewards for detailed feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
