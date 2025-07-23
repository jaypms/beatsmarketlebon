"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800 text-gray-400 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-extrabold text-xl">
          BeatsMarket
        </div>

        <nav className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-pink-500 transition">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-pink-500 transition">
            À Propos
          </Link>
          <Link href="/pricing" className="hover:text-pink-500 transition">
            Tarifs
          </Link>
          <Link href="/terms" className="hover:text-pink-500 transition">
            CGV / CGU
          </Link>
          <Link href="/help" className="hover:text-pink-500 transition">
            Aide
          </Link>
        </nav>

        <div className="text-xs text-gray-500">
          © 2025 BeatsMarket. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
