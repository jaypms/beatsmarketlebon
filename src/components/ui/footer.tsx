import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-primary mb-2">BeatsMarket</h3>
          <p className="text-sm">© 2025 BeatsMarket. Tous droits réservés.</p>
        </div>

        <nav className="space-x-6 text-sm">
          <a href="/about" className="hover:text-primary transition-colors">À propos</a>
          <a href="/pricing" className="hover:text-primary transition-colors">Tarifs</a>
          <a href="/terms" className="hover:text-primary transition-colors">CGV & CGU</a>
          <a href="/help" className="hover:text-primary transition-colors">Aide</a>
        </nav>

        <div className="mt-4 md:mt-0">
          <select
            aria-label="Sélecteur de langue"
            className="bg-gray-800 text-white rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue="fr"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
