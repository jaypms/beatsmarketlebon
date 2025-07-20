import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">

        {/* Logo - remplace cette div par ton image logo */}
        <div>
          <img
            src="/images/logo-beatsmarket.png"
            alt="Logo BeatsMarket"
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Liens */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
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

        {/* Nom du site */}
        <div className="text-white text-xl font-bold text-center">BeatsMarket</div>

        {/* Tous droits réservés */}
        <div className="text-gray-400 text-center text-sm">
          © {new Date().getFullYear()} BeatsMarket. Tous droits réservés.
        </div>

        {/* Propulsé par */}
        <div className="text-gray-400 text-center text-sm">
          Propulsé par <a href="https://pourmastreet.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Pour Ma Street</a>
        </div>

        {/* Images depuis ton téléphone */}
        <div className="flex space-x-4 justify-center">
          {/* Remplace les src par le chemin correct vers tes images */}
          <img
            src="/images/photo1.jpg"
            alt="Photo 1"
            className="h-12 w-auto rounded-md"
          />
          <img
            src="/images/photo2.jpg"
            alt="Photo 2"
            className="h-12 w-auto rounded-md"
          />
          <img
            src="/images/photo3.jpg"
            alt="Photo 3"
            className="h-12 w-auto rounded-md"
          />
        </div>

        {/* Sélecteur langue (optionnel) */}
        <div>
          <select
            aria-label="Sélection de la langue"
            className="bg-gray-800 text-gray-200 py-1 px-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            defaultValue="fr"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>

      </div>
    </footer>
  )
}
