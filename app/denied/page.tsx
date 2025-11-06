export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-6">
      <div className="text-center max-w-2xl">
        <img 
          src="/img/vip-access.png" 
          alt="VIP Access" 
          className="mx-auto mb-8 max-w-xs"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Something Amazing is Coming
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          We're crafting an incredible new experience that will revolutionize how you earn rewards. 
          While we put the finishing touches on something truly special, this area remains our little secret.
        </p>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <p className="text-blue-200 text-lg">
            🚀 <strong>Good news:</strong> Get in touch to request your exclusive access!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/faq"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Request access
          </a>
        </div>
        
        <p className="text-gray-400 text-sm mt-8">
          Stay tuned for updates on our exciting new features coming soon!
        </p>
      </div>
    </div>
  );
}
