import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 border-t mt-10 text-sm text-muted-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <p>© 2025 BeatsMarket. Tous droits réservés.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/help" className="hover:text-pink-500 transition">
            Aide
          </Link>
          <Link href="/about" className="hover:text-pink-500 transition">
            À propos
          </Link>
          <Link href="/terms" className="hover:text-pink-500 transition">
            Conditions
          </Link>
          <Link href="/pricing" className="hover:text-pink-500 transition">
            Tarifs
          </Link>
        </div>
      </div>
    </footer>
  )
}
