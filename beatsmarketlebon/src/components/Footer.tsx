import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 px-4 text-center">
      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto">
        {/* Ici tu peux ajouter d'autres éléments du footer comme liens, logo, etc. */}

        {/* Image en bas du footer */}
        <div className="mt-6">
          <img
            src="/images/footerbeatsmarket.jpg"
            alt="Footer BeatsMarket"
            className="mx-auto max-w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Texte en dessous de l'image */}
        <p className="mt-4 text-sm opacity-70">
          © 2025 BeatsMarket - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
