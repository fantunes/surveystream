import {
  Award,
  CheckCircle,
  Globe,
  Heart,
  Shield,
  Users,
  Zap
} from 'lucide-react';

export default function AboutPageContents() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Your Voice.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Our Mission.
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
          We believe every opinion matters. SurveyStream was born from a simple idea: 
          people should be fairly rewarded for sharing their valuable insights that help shape the future.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400 text-lg">
                How we started and where we're going
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">The Beginning</h3>
                <p className="text-gray-300 mb-4">
                  In 2019, our founders were frustrated with traditional survey platforms that offered 
                  minimal rewards for valuable consumer insights. Companies were making millions from 
                  market research, but participants were getting pennies.
                </p>
                <p className="text-gray-300 mb-4">
                  We saw an opportunity to create something better - a platform that truly values 
                  people's time and opinions, offering fair compensation and multiple reward options 
                  that users actually want.
                </p>
                <p className="text-gray-300">
                  Starting with just three team members and a vision for fairness, we built 
                  SurveyStream from the ground up with user experience and fair rewards at its core.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2019</div>
                  <p className="text-gray-300 mb-4">Founded with a mission to revolutionize market research</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">3</div>
                      <p className="text-gray-400 text-sm">Founding Members</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1</div>
                      <p className="text-gray-400 text-sm">Big Vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20 p-8 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">Today</div>
                    <p className="text-gray-300 mb-4">A thriving community of valued voices</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">50K+</div>
                        <p className="text-gray-400 text-sm">Active Users</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">£2M+</div>
                        <p className="text-gray-400 text-sm">Paid Out</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white mb-6">Where We Are Now</h3>
                <p className="text-gray-300 mb-4">
                  Today, SurveyStream is home to over 50,000 active users who have collectively 
                  earned more than £2 million in rewards. We've partnered with hundreds of brands 
                  and researchers who value authentic consumer insights.
                </p>
                <p className="text-gray-300 mb-4">
                  Our platform has evolved to include not just surveys, but games, NFT rewards, 
                  and innovative ways to engage with our community while earning meaningful rewards.
                </p>
                <p className="text-gray-300">
                  But we're just getting started. Our vision extends far beyond traditional 
                  market research into creating the most rewarding and engaging platform for 
                  consumer voices worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission & Values</h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To create the world's most rewarding platform where every voice is valued, 
                every opinion matters, and every participant is fairly compensated for their 
                time and insights that help shape the future of products and services.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <Heart className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fair Rewards</h3>
              <p className="text-gray-400">
                We believe your time and opinions are valuable. That's why we offer some of 
                the most competitive rewards in the industry, with transparent rates and 
                multiple payout options.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mx-auto mb-6">
                <Shield className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Trust & Security</h3>
              <p className="text-gray-400">
                Your privacy and data security are paramount. We use industry-leading 
                encryption and never sell your personal information to third parties.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/20 mx-auto mb-6">
                <Users className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community First</h3>
              <p className="text-gray-400">
                Our users are at the heart of everything we do. We listen to feedback, 
                continuously improve our platform, and build features that our community wants.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/20 mx-auto mb-6">
                <Zap className="text-orange-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-400">
                We're constantly exploring new ways to make earning rewards more engaging, 
                from gamification to NFT collectibles and blockchain technology.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500/20 mx-auto mb-6">
                <Globe className="text-teal-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
              <p className="text-gray-400">
                By connecting consumer voices with brands worldwide, we're helping create 
                better products and services that truly meet people's needs.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500/20 mx-auto mb-6">
                <Award className="text-red-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every aspect of our platform, from user 
                experience to customer support, ensuring the highest quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose SurveyStream?</h2>
            <p className="text-gray-400 text-lg">
              What makes us different from other survey platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Higher Rewards</h3>
                  <p className="text-gray-400">
                    We offer up to 3x higher rewards than traditional survey platforms, 
                    with transparent pricing and no hidden fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multiple Reward Options</h3>
                  <p className="text-gray-400">
                    Choose from cash, gift cards, or exclusive NFTs. We offer the most 
                    diverse reward catalog in the industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Payouts</h3>
                  <p className="text-gray-400">
                    Get your rewards in 1-3 days, not weeks. Our automated system 
                    ensures quick and reliable payments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quality Surveys</h3>
                  <p className="text-gray-400">
                    We carefully curate surveys to ensure they're relevant, engaging, 
                    and respect your time with fair compensation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-400">
                    Our dedicated support team is always here to help with any 
                    questions or issues you might have.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile Optimized</h3>
                  <p className="text-gray-400">
                    Take surveys anywhere, anytime with our fully responsive platform 
                    that works perfectly on all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-lg">
              The passionate people behind SurveyStream
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Osaki</h3>
              <p className="text-blue-400 mb-2">CEO & Co-Founder</p>
              <p className="text-gray-400 text-sm">
                Former market research analyst with 10+ years experience. 
                Passionate about fair compensation and user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Daré</h3>
              <p className="text-green-400 mb-2">Co-Founder</p>
              <p className="text-gray-400 text-sm">
                Community management expert focused on building 
                meaningful relationships with our user base.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">FA</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Francisco Antunes</h3>
              <p className="text-orange-400 mb-2">CTO</p>
              <p className="text-gray-400 text-sm">
                Full-stack developer and blockchain enthusiast. 
                Leads our technical innovation and platform development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of a community that values your voice and rewards your time. 
            Together, we're shaping the future of market research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#sign-up"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Start Earning Today
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