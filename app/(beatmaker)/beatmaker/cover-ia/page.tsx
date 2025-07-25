import { CoverForm } from './_components/CoverForm'

export const metadata = {
  title: 'Cover IA - BeatsMarket',
  description: "Générez une pochette d'instrumentale automatiquement grâce à l'intelligence artificielle.",
}

export default function CoverIAPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Générateur de Cover IA</h1>
      <p className="mb-8 text-gray-400">
        Créez une pochette professionnelle pour votre beat en quelques secondes avec notre outil IA.
      </p>
      <CoverForm />
    </main>
  )
}