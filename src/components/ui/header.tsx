import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#1e1e2f] text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-pink-500">
        BeatsMarket
      </Link>
      <nav className="space-x-6">
        <Link href="/" className="hover:text-pink-400">Accueil</Link>
        <Link href="/about" className="hover:text-pink-400">À Propos</Link>
        <Link href="/pricing" className="hover:text-pink-400">Tarifs</Link>
        <Link href="/terms" className="hover:text-pink-400">CGV</Link>
        <Link href="/help" className="hover:text-pink-400">Aide</Link>
      </nav>
    </header>
  )
}
