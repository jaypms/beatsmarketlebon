import React from 'react'
import { CoverForm } from './_components/CoverForm'

export default function CoverIAPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Génération IA de Pochette d'Album</h1>
      <p className="mb-4 text-center text-gray-400">
        Utilise notre outil d'intelligence artificielle pour créer une pochette personnalisée pour tes beats.
      </p>
      <CoverForm />
    </main>
  )
}