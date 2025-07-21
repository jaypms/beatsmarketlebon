import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">À propos de BeatsMarket</h1>
      <p className="mb-4">
        BeatsMarket est une plateforme dédiée aux beatmakers et artistes pour acheter et vendre des beats de qualité.
      </p>
      <Link href="/pricing" className="text-pink-500 hover:underline">
        Voir nos tarifs
      </Link>
    </main>
  )
}
