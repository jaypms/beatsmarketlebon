import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-darkbg2 text-white py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-primary font-bold text-lg mb-2">BeatsMarket</h2>
          <p className="text-gray-400">
            La plateforme ultime pour acheter, vendre et distribuer des beats avec style.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/"><a className="hover:text-primary">Accueil</a></Link></li>
            <li><Link href="/pricing"><a className="hover:text-primary">Tarifs</a></Link></li>
            <li><Link href="/about"><a className="hover:text-primary">À propos</a></Link></li>
            <li><Link href="/terms"><a className="hover:text-primary">CGV / Mentions</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Réseaux</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-primary">Instagram</a></li>
            <li><a href="#" className="hover:text-primary">YouTube</a></li>
            <li><a href="#" className="hover:text-primary">TikTok</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} BeatsMarket. Tous droits réservés.
      </div>
    </footer>
  )
}
