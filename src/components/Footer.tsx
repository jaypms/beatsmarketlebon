import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkbg2 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h2 className="text-primary font-bold text-lg mb-2">BeatsMarket</h2>
          <p className="text-gray-400">
            La plateforme ultime pour acheter, vendre et distribuer vos beats.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-pink-500 transition">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500 transition">
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pink-500 transition">
                CGV / CGU
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Réseaux</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
