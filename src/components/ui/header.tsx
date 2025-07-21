import React from "react";

export default function Header() {
  return (
    <header className="bg-[#0e0b16] py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold text-white">BeatsMarket</div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="/" className="hover:text-pink-600">Accueil</a></li>
            <li><a href="/about" className="hover:text-pink-600">À propos</a></li>
            <li><a href="/pricing" className="hover:text-pink-600">Tarifs</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
