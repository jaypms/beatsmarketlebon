import React from "react"

export default function PricingPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-darkbg text-white font-poppins">
      <h1 className="text-4xl font-bold mb-8 text-primary">Nos Offres</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-darkbg2 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Gratuit</h2>
          <p className="text-gray-400 mb-6">Démarrez sans engagement.</p>
          <ul className="text-sm space-y-2">
            <li>• Mise en ligne de 3 beats</li>
            <li>• Statistiques basiques</li>
            <li>• Boutique publique</li>
          </ul>
        </div>

        <div className="bg-darkbg2 p-6 rounded-2xl shadow-md border border-primary">
          <h2 className="text-xl font-semibold text-primary mb-4">Or</h2>
          <p className="text-gray-400 mb-6">Pour les beatmakers pros.</p>
          <ul className="text-sm space-y-2">
            <li>• 200 beats actifs</li>
            <li>• Mastering IA offert</li>
            <li>• Mise en avant premium</li>
          </ul>
        </div>

        <div className="bg-darkbg2 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Diamant</h2>
          <p className="text-gray-400 mb-6">Le plus complet.</p>
          <ul className="text-sm space-y-2">
            <li>• Beats illimités</li>
            <li>• Couvertures IA</li>
            <li>• Distribution Believe</li>
            <li>• Équipe support dédiée</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
