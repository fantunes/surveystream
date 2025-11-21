'use client';

import { useAuth } from '@/lib/auth-context';
import {
  Award,
  ChevronRight,
  DollarSign,
  Gift,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardRewardsPageContents() {
  const { user } = useAuth();

  // Mock user token data
  const userTokens = 3450;
  const cashValue = (userTokens / 100).toFixed(2);

  const rewardCategories = [
    {
      id: 'cash',
      title: 'Cash Payout',
      icon: DollarSign,
      color: 'green' as const,
      description: 'Instant transfer to your account',
      available: `£${cashValue}`,
      minAmount: '£5.00',
      processingTime: '1-3 days',
      bonus: null
    },
    {
      id: 'gift-cards',
      title: 'Gift Cards',
      icon: Gift,
      color: 'purple' as const,
      description: '100+ popular brands',
      available: 'Instant delivery',
      minAmount: '£5.00',
      processingTime: 'Instant',
      bonus: 'Up to 5% bonus'
    },
    {
      id: 'nft',
      title: 'NFT Collectibles',
      icon: Award,
      color: 'blue' as const,
      description: 'Exclusive digital art',
      available: '5 rarity tiers',
      minAmount: '1,000 tokens',
      processingTime: 'Instant',
      bonus: 'Investment potential'
    }
  ];

  const popularRedemptions = [
    {
      id: 1,
      name: 'PayPal Cash',
      category: 'Cash',
      icon: '£',
      color: 'green',
      minTokens: 500,
      minValue: '£5',
      bonus: null,
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Amazon Gift Card',
      category: 'Gift Card',
      icon: 'A',
      color: 'orange',
      minTokens: 500,
      minValue: '£5',
      bonus: '+2%',
      badge: 'Bonus'
    },
    {
      id: 3,
      name: 'Netflix Gift Card',
      category: 'Gift Card',
      icon: 'N',
      color: 'red',
      minTokens: 1000,
      minValue: '£10',
      bonus: '+3%',
      badge: 'Bonus'
    },
    {
      id: 4,
      name: 'Spotify Premium',
      category: 'Gift Card',
      icon: 'S',
      color: 'green',
      minTokens: 1000,
      minValue: '£10',
      bonus: '+5%',
      badge: 'Best Value'
    },
    {
      id: 5,
      name: 'Bank Transfer',
      category: 'Cash',
      icon: '£',
      color: 'blue',
      minTokens: 500,
      minValue: '£5',
      bonus: null,
      badge: 'Fast'
    },
    {
      id: 6,
      name: 'Rare NFT Collection',
      category: 'NFT',
      icon: '✨',
      color: 'purple',
      minTokens: 5000,
      minValue: '50 tokens',
      bonus: null,
      badge: 'Limited'
    }
  ];

  const recentRedemptions = [
    {
      id: 1,
      item: 'Amazon Gift Card',
      amount: '£25',
      tokens: 2500,
      date: '2 days ago',
      status: 'Completed'
    },
    {
      id: 2,
      item: 'PayPal Cash',
      amount: '£15',
      tokens: 1500,
      date: '1 week ago',
      status: 'Completed'
    },
    {
      id: 3,
      item: 'Netflix Gift Card',
      amount: '£10',
      tokens: 1000,
      date: '2 weeks ago',
      status: 'Completed'
    }
  ];

  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Redeem Your Rewards
          </h1>
          <p className="text-gray-400 text-lg">
            Turn your tokens into real value
          </p>
        </div>

        {/* Token Balance Card */}
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 p-8 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-gray-400 text-sm mb-2">Your Token Balance</div>
              <div className="text-5xl font-bold text-white mb-2">
                {userTokens.toLocaleString()}
              </div>
              <div className="text-2xl text-blue-400 font-semibold">
                = £{cashValue}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-xs text-gray-400 mb-1">Exchange Rate</div>
                <div className="text-white font-semibold">100 tokens = £1</div>
              </div>
              <Link
                href="/surveys"
                className="text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                Earn More Tokens
              </Link>
            </div>
          </div>
        </div>

        {/* Reward Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Reward Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {rewardCategories.map((category) => {
              const Icon = category.icon;
              const colorClasses = {
                green: 'from-green-900/40 to-green-800/20 border-green-500/30',
                purple: 'from-purple-900/40 to-purple-800/20 border-purple-500/30',
                blue: 'from-blue-900/40 to-cyan-800/20 border-blue-500/30'
              };
              const iconColors = {
                green: 'text-green-400 bg-green-500/20',
                purple: 'text-purple-400 bg-purple-500/20',
                blue: 'text-blue-400 bg-blue-500/20'
              };

              return (
                <div
                  key={category.id}
                  className={`bg-gradient-to-br ${colorClasses[category.color]} border p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
                >
                  <div className={`flex items-center justify-center h-14 w-14 rounded-full ${iconColors[category.color]} mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Available:</span>
                      <span className="text-white font-semibold">{category.available}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Minimum:</span>
                      <span className="text-white font-semibold">{category.minAmount}</span>
                    </div>
                    {category.bonus && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Bonus:</span>
                        <span className="text-green-400 font-semibold">{category.bonus}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Popular Redemptions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Popular Redemptions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularRedemptions.map((item) => {
                const canRedeem = userTokens >= item.minTokens;
                return (
                  <div
                    key={item.id}
                    className={`glass-effect p-5 rounded-xl transition-all duration-300 ${
                      canRedeem
                        ? 'hover:border-blue-500/50 cursor-pointer group'
                        : 'opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-lg bg-${item.color}-500/20 flex-shrink-0`}>
                        <span className={`text-xl font-bold text-${item.color}-400`}>
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`font-semibold text-white truncate ${canRedeem ? 'group-hover:text-blue-400' : ''}`}>
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-xs mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-white font-semibold">
                              {item.minValue}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.minTokens} tokens
                            </div>
                          </div>
                          {item.bonus && (
                            <div className="text-green-400 text-xs font-semibold">
                              {item.bonus}
                            </div>
                          )}
                        </div>
                        {!canRedeem && (
                          <div className="mt-2 text-xs text-red-400">
                            Need {item.minTokens - userTokens} more tokens
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Browse All Rewards
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Redeemed</span>
                  <span className="text-white font-bold">£50.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Redemptions</span>
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg. Value</span>
                  <span className="text-white font-bold">£16.67</span>
                </div>
              </div>
            </div>

            {/* Recent Redemptions */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Recent Redemptions</h3>
              <div className="space-y-4">
                {recentRedemptions.map((redemption) => (
                  <div
                    key={redemption.id}
                    className="pb-4 border-b border-gray-700 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium text-sm truncate">
                          {redemption.item}
                        </div>
                        <div className="text-gray-400 text-xs">{redemption.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">
                          {redemption.amount}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {redemption.tokens} tokens
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 p-6 rounded-xl text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 mx-auto mb-4">
                <Award className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Check our FAQ for redemption questions
              </p>
              <Link
                href="/faq"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center justify-center gap-1"
              >
                View FAQ <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
