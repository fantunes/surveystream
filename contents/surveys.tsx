import {
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Globe,
  Play,
  Shield,
  Star,
  Target,
  Users,
  Zap
} from 'lucide-react';

export default function SurveysPageContents() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Share Your Voice.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Earn Real Rewards.
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Take part in surveys that matter. Your opinions help shape the products and services 
          you use every day, while you earn tokens that convert to real cash and rewards.
        </p>
        <a
          href="#available-surveys"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Browse Surveys
        </a>
      </section>

      {/* How Surveys Work */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">
              Simple steps to start earning with surveys
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <Target className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">1. Find Your Match</h3>
              <p className="text-gray-400">
                Browse surveys tailored to your interests and demographics. 
                We match you with relevant opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mx-auto mb-6">
                <Play className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">2. Take the Survey</h3>
              <p className="text-gray-400">
                Answer questions honestly about your experiences, preferences, 
                and opinions. Most surveys take 5-30 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/20 mx-auto mb-6">
                <CheckCircle className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3. Get Verified</h3>
              <p className="text-gray-400">
                Our quality checks ensure genuine responses. 
                Completed surveys are verified within minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/20 mx-auto mb-6">
                <DollarSign className="text-orange-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">4. Earn Rewards</h3>
              <p className="text-gray-400">
                Tokens are added to your account instantly. 
                Redeem for cash, gift cards, or NFTs anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Survey Categories</h2>
            <p className="text-gray-400 text-lg">
              Explore different types of surveys available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 mb-4">
                <Globe className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Consumer Products</h3>
              <p className="text-gray-400 mb-4">
                Share your thoughts on everyday products, from food and beverages 
                to household items and personal care.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-blue-400 font-semibold">100-800 tokens</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 mb-4">
                <Zap className="text-green-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technology</h3>
              <p className="text-gray-400 mb-4">
                Help shape the future of apps, websites, gadgets, and digital services 
                with your tech insights and usage patterns.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-green-400 font-semibold">200-1000 tokens</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500/20 mb-4">
                <Users className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lifestyle & Entertainment</h3>
              <p className="text-gray-400 mb-4">
                Tell us about your hobbies, entertainment preferences, travel habits, 
                and lifestyle choices.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-purple-400 font-semibold">150-600 tokens</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500/20 mb-4">
                <Shield className="text-orange-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
              <p className="text-gray-400 mb-4">
                Share your experiences with banking, insurance, investments, 
                and other financial products and services.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-orange-400 font-semibold">300-1200 tokens</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 border border-teal-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500/20 mb-4">
                <Star className="text-teal-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Health & Wellness</h3>
              <p className="text-gray-400 mb-4">
                Help improve healthcare services and wellness products by sharing 
                your health-related experiences and preferences.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-teal-400 font-semibold">250-900 tokens</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/20 p-6 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500/20 mb-4">
                <Clock className="text-red-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quick Polls</h3>
              <p className="text-gray-400 mb-4">
                Short 1-3 minute surveys perfect for earning quick rewards 
                during your spare time throughout the day.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reward Range:</span>
                <span className="text-red-400 font-semibold">25-150 tokens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Surveys */}
      <section id="available-surveys" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Available Surveys</h2>
            <p className="text-gray-400">
              Current opportunities to earn tokens
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">TECHNOLOGY</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">HIGH REWARD</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Mobile Banking App Experience
                </h3>
                <p className="text-sm text-gray-400">
                  Share your experience with mobile banking apps and help improve digital financial services.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">15 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">750 Tokens</span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-semibold">LIFESTYLE</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Weekly Shopping Habits
                </h3>
                <p className="text-sm text-gray-400">
                  Tell us about your grocery shopping routine and preferences to help retailers serve you better.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">10 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">350 Tokens</span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">ENTERTAINMENT</span>
                  <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-semibold">POPULAR</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Streaming Service Preferences
                </h3>
                <p className="text-sm text-gray-400">
                  Help streaming platforms understand what content you love and how you discover new shows.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">20 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">700 Tokens</span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">QUICK POLL</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Coffee Preferences
                </h3>
                <p className="text-sm text-gray-400">
                  Quick 3-minute poll about your coffee drinking habits and favorite brands.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">3 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">100 Tokens</span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">New surveys added daily!</p>
            <a
              href="#sign-up"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Sign Up to See More
            </a>
          </div>
        </div>
      </section>

      {/* Survey Tips */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tips for Success</h2>
            <p className="text-gray-400 text-lg">
              Maximize your earnings with these helpful tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Be Honest & Consistent</h3>
                <p className="text-gray-400">
                  Always provide truthful answers. Our quality checks detect inconsistencies, 
                  and honest responses lead to more survey invitations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Your Profile</h3>
                <p className="text-gray-400">
                  A complete profile helps us match you with more relevant surveys, 
                  increasing your earning opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Check Daily</h3>
                <p className="text-gray-400">
                  New surveys are added regularly. Check back daily to find fresh 
                  opportunities and maximize your earnings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Take Your Time</h3>
                <p className="text-gray-400">
                  Don't rush through surveys. Thoughtful responses are valued more 
                  and lead to better survey matching in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Share Your Voice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are earning real rewards by sharing their opinions. 
            Your voice matters, and we'll prove it with every survey you complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#sign-up"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Start Taking Surveys
            </a>
            <a
              href="/rewards"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Rewards
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}