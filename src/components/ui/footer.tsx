// src/components/ui/footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 border-t mt-10 text-sm text-muted-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <p>© 2025 BeatsMarket. Tous droits réservés.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/terms" className="hover:underline">
            Conditions
          </Link>
          <Link href="/about" className="hover:underline">
            À propos
          </Link>
          <Link href="/pricing" className="hover:underline">
            Tarifs
          </Link>
        </div>
      </div>
    </footer>
  )
}
