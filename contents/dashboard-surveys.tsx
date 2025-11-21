'use client';

import { useAuth } from '@/lib/auth-context';
import {
  CheckCircle,
  ChevronRight,
  Clock,
  Filter,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function DashboardSurveysPageContents() {
  const { user } = useAuth();

  const availableSurveys = [
    {
      id: 1,
      title: 'Streaming Service Preferences',
      category: 'Entertainment',
      tokens: 700,
      duration: '20 min',
      difficulty: 'Medium',
      badge: 'Popular',
      description: 'Share your thoughts on streaming platforms and content preferences'
    },
    {
      id: 2,
      title: 'Coffee Preferences',
      category: 'Quick Poll',
      tokens: 100,
      duration: '3 min',
      difficulty: 'Easy',
      badge: 'Quick',
      description: 'Quick poll about your coffee drinking habits'
    },
    {
      id: 3,
      title: 'Financial Services Survey',
      category: 'Finance',
      tokens: 1200,
      duration: '25 min',
      difficulty: 'Hard',
      badge: 'High Reward',
      description: 'Help improve banking and financial services'
    },
    {
      id: 4,
      title: 'Mobile Shopping Experience',
      category: 'Technology',
      tokens: 850,
      duration: '18 min',
      difficulty: 'Medium',
      badge: 'New',
      description: 'Share your mobile shopping app experiences'
    },
    {
      id: 5,
      title: 'Fitness Tracker Usage',
      category: 'Health',
      tokens: 600,
      duration: '15 min',
      difficulty: 'Easy',
      badge: null,
      description: 'Tell us about your fitness tracking habits'
    },
    {
      id: 6,
      title: 'Travel Preferences 2024',
      category: 'Lifestyle',
      tokens: 950,
      duration: '22 min',
      difficulty: 'Medium',
      badge: 'Trending',
      description: 'Share your travel plans and preferences'
    }
  ];

  const categories = [
    { name: 'All', count: 24, active: true },
    { name: 'Quick Polls', count: 8, active: false },
    { name: 'Technology', count: 6, active: false },
    { name: 'Finance', count: 4, active: false },
    { name: 'Lifestyle', count: 6, active: false }
  ];

  const stats = {
    available: 24,
    completed: 12,
    inProgress: 2,
    avgReward: 450
  };

  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Available Surveys
          </h1>
          <p className="text-gray-400 text-lg">
            Share your opinions and earn tokens
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Available</div>
              <Zap className="text-blue-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.available}</div>
            <div className="text-xs text-blue-400 mt-1">+3 new today</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">Completed</div>
              <CheckCircle className="text-green-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.completed}</div>
            <div className="text-xs text-green-400 mt-1">This month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-400 text-sm">In Progress</div>
              <Clock className="text-purple-400 h-5 w-5" />
            </div>
            <div className="text-3xl font-bold text-white">{stats.inProgress}</div>
            <div className="text-xs text-purple-400 mt-1">Resume anytime</div>
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
                <Filter className="text-blue-400 h-5 w-5" />
                <h3 className="text-lg font-bold text-white">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        category.active
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-xs">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {['Easy', 'Medium', 'Hard'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-blue-500" />
                      <span className="text-sm text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Duration</h4>
                <div className="space-y-2">
                  {['< 5 min', '5-15 min', '15-30 min', '30+ min'].map((duration) => (
                    <label key={duration} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-blue-500" />
                      <span className="text-sm text-gray-300">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Surveys List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {availableSurveys.map((survey) => (
                <div
                  key={survey.id}
                  className="glass-effect p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                          {survey.category}
                        </span>
                        {survey.badge && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                            {survey.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
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
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">
                          {survey.tokens}
                        </div>
                        <div className="text-xs text-gray-400">Tokens</div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                        Start
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105">
                Load More Surveys
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
