import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-darkbg2 shadow-md p-4 flex justify-between items-center">
      <Link href="/">
        <a className="text-2xl font-bold text-primary">BeatsMarket</a>
      </Link>
      <nav>
        <ul className="flex gap-6 text-white font-ptsans">
          <li>
            <Link href="/pricing">
              <a className="hover:text-secondary">Tarifs</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-secondary">À propos</a>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <a className="hover:text-secondary">Aide</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="hover:text-primary font-bold">Connexion</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
