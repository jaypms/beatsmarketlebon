"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-pink-500 hover:text-pink-400">
          BeatsMarket
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          <Link href="/" className="hover:text-pink-400 transition">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-pink-400 transition">
            À Propos
          </Link>
          <Link href="/pricing" className="hover:text-pink-400 transition">
            Tarifs
          </Link>
          <Link href="/help" className="hover:text-pink-400 transition">
            Aide
          </Link>
          <Link href="/admin" className="hover:text-pink-400 transition">
            Admin
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-500 hover:text-pink-400 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#121212] border-t border-gray-800 px-4 py-4 space-y-3 font-medium text-white">
          <Link
            href="/"
            className="block hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="block hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            À Propos
          </Link>
          <Link
            href="/pricing"
            className="block hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Tarifs
          </Link>
          <Link
            href="/help"
            className="block hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Aide
          </Link>
          <Link
            href="/admin"
            className="block hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>
        </nav>
      )}
    </header>
  );
}
