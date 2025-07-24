import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#121217] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center space-x-3">
            <img
              src="/images/logo-beatsmarket.svg"
              alt="BeatsMarket Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl font-['Poppins']">BeatsMarket</span>
          </a>
        </Link>

        <nav className="hidden md:flex space-x-8 font-['PT_Sans'] text-gray-300">
          <Link href="/">
            <a className="hover:text-pink-500 transition-colors">Accueil</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-pink-500 transition-colors">À propos</a>
          </Link>
          <Link href="/pricing">
            <a className="hover:text-pink-500 transition-colors">Tarifs</a>
          </Link>
          <Link href="/terms">
            <a className="hover:text-pink-500 transition-colors">CGVU</a>
          </Link>
          <Link href="/help">
            <a className="hover:text-pink-500 transition-colors">Aide</a>
          </Link>
        </nav>

        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          {/* Ici tu pourras ajouter un bouton burger pour mobile */}
        </div>
      </div>
    </header>
  );
}