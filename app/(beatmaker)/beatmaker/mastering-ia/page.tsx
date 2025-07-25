import React from 'react'
import { MasteringForm } from './_components/MasteringForm'

export default function MasteringPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Mastering IA</h1>
      <p className="mb-6 text-gray-400">
        Améliorez la qualité audio de vos instrumentales en quelques clics grâce à notre service de mastering par intelligence artificielle.
      </p>
      <MasteringForm />
    </main>
  )
}