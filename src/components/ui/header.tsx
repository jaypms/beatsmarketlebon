import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-pink-500 text-white p-6 flex justify-between items-center">
      <div className="text-2xl font-extrabold tracking-tight">
        BeatsMarket
      </div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Accueil</a></li>
          <li><a href="/about" className="hover:underline">À Propos</a></li>
          <li><a href="/pricing" className="hover:underline">Tarifs</a></li>
          <li><a href="/admin" className="hover:underline">Admin</a></li>
        </ul>
      </nav>
    </header>
  )
}
