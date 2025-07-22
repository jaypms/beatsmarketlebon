import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400 p-6 mt-12 text-center text-sm">
      <p>© 2025 BeatsMarket. Tous droits réservés.</p>
      <nav className="mt-2 space-x-4">
        <Link href="/terms" className="hover:text-pink-400">Conditions Générales</Link>
        <Link href="/privacy" className="hover:text-pink-400">Politique de confidentialité</Link>
        <Link href="/contact" className="hover:text-pink-400">Contact</Link>
      </nav>
    </footer>
  )
}
