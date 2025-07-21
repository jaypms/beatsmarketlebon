import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-pink-500 text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold tracking-tight hover:opacity-90">
            BeatsMarket
          </a>
        </Link>
        <nav className="space-x-6">
          <Link href="/about"><a className="hover:underline">À propos</a></Link>
          <Link href="/pricing"><a className="hover:underline">Tarifs</a></Link>
          <Link href="/help"><a className="hover:underline">Aide</a></Link>
          <Link href="/admin"><a className="hover:underline">Admin</a></Link>
        </nav>
      </div>
    </header>
  )
}
