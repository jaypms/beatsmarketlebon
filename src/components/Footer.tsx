import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white p-6">
      <nav className="flex space-x-6">
        <Link href="/help" className="hover:text-pink-500 transition">
          Aide
        </Link>
        <Link href="/about" className="hover:text-pink-500 transition">
          À propos
        </Link>
        <Link href="/terms" className="hover:text-pink-500 transition">
          Conditions générales
        </Link>
        <Link href="/pricing" className="hover:text-pink-500 transition">
          Tarifs
        </Link>
      </nav>
    </footer>
  )
}
