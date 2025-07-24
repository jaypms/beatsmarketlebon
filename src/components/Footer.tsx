import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121217] text-gray-400 text-sm md:text-base py-8 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo-beatsmarket.svg"
            alt="BeatsMarket Logo"
            className="h-8 w-auto"
          />
          <span className="font-semibold text-white text-lg">BeatsMarket</span>
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-pink-500 transition-colors">
            Accueil
          </a>
          <a href="/about" className="hover:text-pink-500 transition-colors">
            À propos
          </a>
          <a href="/pricing" className="hover:text-pink-500 transition-colors">
            Tarifs
          </a>
          <a href="/terms" className="hover:text-pink-500 transition-colors">
            CGVU
          </a>
          <a href="/help" className="hover:text-pink-500 transition-colors">
            Aide
          </a>
        </nav>

        {/* Mentions légales */}
        <div className="text-gray-500 text-xs md:text-sm text-center md:text-right">
          © 2025 BeatsMarket. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}