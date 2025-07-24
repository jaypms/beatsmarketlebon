import React from "react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen bg-[#1A1B1F] flex flex-col items-center justify-center px-6 text-white font-['PT_Sans']">
      <h1 className="text-5xl font-bold mb-6 font-['Poppins']">Accès refusé</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Vous n’avez pas les droits nécessaires pour accéder à cette page.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-pink-500 rounded font-semibold hover:bg-pink-600 transition-colors">
          Retour à l’accueil
        </a>
      </Link>
    </main>
  );
}