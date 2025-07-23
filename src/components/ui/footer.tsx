'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/10 py-10 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            BeatsMarket
          </Link>
          <p className="text-sm text-gray-400">&copy; 2025 BeatsMarket. Tous droits réservés.</p>
        </div>
        <nav className="flex space-x-6 text-sm text-gray-400">
          <Link href="/terms">CGV & Conditions</Link>
          <Link href="/privacy">Politique de confidentialité</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/help">Aide</Link>
        </nav>
      </div>
    </footer>
  )
}
