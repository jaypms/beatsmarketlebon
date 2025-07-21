import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-pink-500 text-white p-6 mt-12 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} BeatsMarket. Tous droits réservés.</p>
        <nav className="flex justify-center gap-6">
          <a href="/terms" className="hover:underline">Conditions générales</a>
          <a href="/privacy" className="hover:underline">Politique de confidentialité</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
