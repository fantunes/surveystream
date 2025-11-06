import {
  Blocks,
  ChevronRight,
  Clock,
  CreditCard,
  Gift,
  GiftIcon,
  PoundSterlingIcon,
  Star,
  Zap
} from 'lucide-react';

export default function RewardsPageContents() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Your Rewards.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Your Way.
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Discover all the ways you can turn your opinions into valuable rewards. 
          From instant cash payouts to exclusive NFTs, we've got something for everyone.
        </p>
      </section>

      {/* Reward Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Reward</h2>
            <p className="text-gray-400 text-lg">
              Multiple ways to enjoy your earnings
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cash Rewards */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mx-auto mb-6">
                <PoundSterlingIcon className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Cash Payouts</h3>
              <p className="text-gray-300 text-center mb-6">
                Get paid directly to your bank account or PayPal. Fast, secure, and reliable.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Minimum payout:</span>
                  <span className="text-white font-semibold">£5.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Processing time:</span>
                  <span className="text-white font-semibold">1-3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Exchange rate:</span>
                  <span className="text-white font-semibold">100 tokens = £1</span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                <p className="text-green-200 text-sm">
                  <strong>Popular choice:</strong> Most users prefer cash for its flexibility and instant value.
                </p>
              </div>

              <a
                href="/faq#cash"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Gift Cards */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/20 mx-auto mb-6">
                <GiftIcon className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Gift Cards</h3>
              <p className="text-gray-300 text-center mb-6">
                Choose from hundreds of popular retailers and get instant delivery.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Available from:</span>
                  <span className="text-white font-semibold">£5 - £500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Delivery:</span>
                  <span className="text-white font-semibold">Instant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bonus rate:</span>
                  <span className="text-white font-semibold">Up to 5% extra</span>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
                <p className="text-purple-200 text-sm">
                  <strong>Bonus value:</strong> Some gift cards offer up to 5% bonus tokens compared to cash.
                </p>
              </div>

              <a
                href="/faq#gift-cards"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Browse Cards <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* NFTs */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-800/10 border border-blue-500/20 p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <Blocks className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">NFT Collectibles</h3>
              <p className="text-gray-300 text-center mb-6">
                Exclusive digital collectibles that you can trade, sell, or keep as investments.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Starting from:</span>
                  <span className="text-white font-semibold">1,000 tokens</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Marketplace:</span>
                  <span className="text-white font-semibold">Built-in trading</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rarity levels:</span>
                  <span className="text-white font-semibold">5 tiers</span>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <p className="text-blue-200 text-sm">
                  <strong>Investment potential:</strong> Rare NFTs have appreciated significantly in our marketplace.
                </p>
              </div>

              <a
                href="/faq#nft-collectibles"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Explore NFTs <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular Gift Card Brands
            </h2>
            <p className="text-gray-400">
              Choose from hundreds of your favorite retailers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="h-12 mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-orange-400">Amazon</div>
              </div>
              <p className="text-gray-300 text-sm mb-2">£5 - £500</p>
              <p className="text-green-400 text-xs font-semibold">+2% Bonus</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="h-12 mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-red-400">Netflix</div>
              </div>
              <p className="text-gray-300 text-sm mb-2">£10 - £100</p>
              <p className="text-green-400 text-xs font-semibold">+3% Bonus</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="h-12 mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-green-400">Spotify</div>
              </div>
              <p className="text-gray-300 text-sm mb-2">£10 - £50</p>
              <p className="text-green-400 text-xs font-semibold">+5% Bonus</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="h-12 mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-400">PayPal</div>
              </div>
              <p className="text-gray-300 text-sm mb-2">£5 - £200</p>
              <p className="text-yellow-400 text-xs font-semibold">Standard Rate</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">And hundreds more including:</p>
            <p className="text-gray-300">
              Apple, Google Play, Steam, Xbox, PlayStation, Tesco, ASDA, John Lewis, 
              Argos, Currys, JD Sports, ASOS, Zara, and many more...
            </p>
          </div>
        </div>
      </section>

      {/* How Earning Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How You Earn Tokens</h2>
            <p className="text-gray-400 text-lg">
              Multiple ways to build your token balance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-4">
                <Clock className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Surveys</h3>
              <p className="text-gray-400 mb-2">50-1000 tokens</p>
              <p className="text-sm text-gray-500">5-30 minutes each</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/20 mx-auto mb-4">
                <Zap className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Games</h3>
              <p className="text-gray-400 mb-2">10-500 tokens</p>
              <p className="text-sm text-gray-500">Play and earn</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mx-auto mb-4">
                <Star className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Daily Bonus</h3>
              <p className="text-gray-400 mb-2">25-100 tokens</p>
              <p className="text-sm text-gray-500">Login streak rewards</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/20 mx-auto mb-4">
                <Gift className="text-orange-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Referrals</h3>
              <p className="text-gray-400 mb-2">500+ tokens</p>
              <p className="text-sm text-gray-500">Per successful referral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Value Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Token Value Calculator</h2>
              <p className="text-gray-400 mb-6">See what your tokens are worth</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">1,000</div>
                  <div className="text-gray-300 text-sm mb-2">Tokens</div>
                  <div className="text-white font-semibold">= £10.00</div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">5,000</div>
                  <div className="text-gray-300 text-sm mb-2">Tokens</div>
                  <div className="text-white font-semibold">= £50.00</div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">10,000</div>
                  <div className="text-gray-300 text-sm mb-2">Tokens</div>
                  <div className="text-white font-semibold">= £100.00</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                * Gift card bonuses may increase value by up to 5%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already turning their opinions into valuable rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#sign-up"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Start Earning Now
            </a>
            <a
              href="/faq"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}