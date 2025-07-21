"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-xl font-bold text-pink-500">BeatsMarket</div>
        <nav className="flex space-x-6">
          <Link href="/help" className="hover:text-pink-500 transition">
            Aide
          </Link>
          <Link href="/about" className="hover:text-pink-500 transition">
            À propos
          </Link>
          <Link href="/terms" className="hover:text-pink-500 transition">
            CGV
          </Link>
          <Link href="/pricing" className="hover:text-pink-500 transition">
            Tarifs
          </Link>
        </nav>
        <div className="text-sm">&copy; 2025 BeatsMarket. Tous droits réservés.</div>
      </div>
    </footer>
  )
}
