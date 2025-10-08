'use client';

import { useEffect, useState } from 'react';

export default function FAQContents() {
  const [section, setSection] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (hash) {
      setSection(hash);
    }
  }, []);

  // Scroll to id based on the hash when component mounts
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <main className="pt-20">
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          FAQ
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Your Questions Answered.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Find answers to the most frequently asked questions about our services
          and offerings.
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What is the purpose of this website?
            </h2>
            <p className="text-gray-300">
              This website is designed to provide users with comprehensive
              information about our products and services, as well as to
              facilitate easy access to support and resources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How can I contact customer support?
            </h2>
            <p className="text-gray-300">
              You can reach our customer support team via the Contact Us page,
              where you will find a form to submit your inquiries or issues. We
              also offer live chat support during business hours.
            </p>
          </div>

          <div
            id="cash"
            className={` ${
              section.includes('cash') ? 'bg-gray-800 border p-5' : ''
            }`}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              What is Cash payments?
            </h2>
            <p className="text-gray-300 mb-4">
              Cash payments are money transfers made directly to your bank
              account. This method is secure and allows for easy access to your
              funds without the need for digital wallets or cryptocurrencies.
            </p>
          </div>
          <div
            id="gift-cards"
            className={` ${
              section.includes('gift-cards') ? 'bg-gray-800 border p-5' : ''
            }`}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              What are Gift Cards?
            </h2>
            <p className="text-gray-300 mb-4">
              Gift Cards are prepaid cards that can be used as an alternative
              payment method. They are available in various denominations and
              can be redeemed at multiple retailers or online platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What is a NFT?
            </h2>
            <p className="text-gray-300">
              A Non-Fungible Token (NFT) is a unique digital asset that
              represents ownership of a specific item or piece of content, often
              using blockchain technology to verify its authenticity and
              ownership.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How can I earn money with NFTs?
            </h2>
            <p className="text-gray-300">
              You can earn money with NFTs by creating and selling your own
              digital art or collectibles, trading NFTs on various marketplaces,
              or participating in NFT-based games and platforms that offer
              rewards.
            </p>
          </div>

          <div
            id="nft-collectibles"
            className={` ${
              section.includes('nft-collectibles')
                ? 'bg-gray-800 border p-5'
                : ''
            }`}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              What is NFT collectibles?
            </h2>
            <p className="text-gray-300 mb-4">
              This new feature allows users to redeem their SSTs for tiered
              digital collectibles. This system is designed to drive long-term
              engagement and platform loyalty. The tiers are:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Common:</strong> 0-200 SSTs
              </li>
              <li>
                <strong>Uncommon:</strong> 200-400 SSTs
              </li>
              <li>
                <strong>Epic:</strong> 400-600 SSTs
              </li>

              <li>
                <strong>Legendary:</strong> 600-1000 SSTs
              </li>
              <li>
                <strong>Exotic:</strong> {'>'}1000 SSTs
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
