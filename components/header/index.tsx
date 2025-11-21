export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect bg-gray-600">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/img/logo-surveystream.png"
            alt="surveystream"
            className="h-10"
          />
          <span className="text-xl font-bold text-white">SurveyStream</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="/surveys"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Surveys
          </a>
          <a
            href="/rewards"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Rewards
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About Us
          </a>
          <a
            href="/faq"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/dashboard"
            className="text-gray-300 hover:text-white transition"
          >
            Log In
          </a>
          <a
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold cta-button hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
