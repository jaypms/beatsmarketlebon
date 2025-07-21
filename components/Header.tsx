import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-darkbg text-white py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">BeatsMarket</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-pink-500 transition">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-pink-500 transition">
              Tarifs
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-pink-500 transition">
              Aide
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-pink-500 transition">
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
