import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-darkbg2 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-primary font-bold text-xl mb-2">BeatsMarket</h2>
          <p className="text-gray-400">
            La plateforme ultime pour acheter, vendre et découvrir des beats de qualité.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">
                CGV / Mentions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Réseaux sociaux</h3>
          {/* Ici tu peux ajouter des liens vers tes réseaux sociaux */}
        </div>
      </div>
    </footer>
  )
}
