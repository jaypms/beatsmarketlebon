import React from "react"

export default function PricingPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-darkbg text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Nos Tarifs</h1>

      {/* Plans d’abonnement */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
        <PlanCard name="Gratuit" price="0€" features={["1 beat en boutique", "Accès IA mastering", "Distribution en option"]} />
        <PlanCard name="Bronze" price="9,90€" features={["10 beats en boutique", "IA cover incluse", "Mise en avant possible"]} />
        <PlanCard name="Or" price="19,90€" features={["25 beats", "Priorité IA", "Support premium"]} />
        <PlanCard name="Diamant" price="49,90€" features={["Beats illimités", "Boost AI", "Mise en avant +"]} />
        <PlanCard name="Diamant Plus" price="79,90€" features={["Illimité + stats avancées", "Mise en avant prioritaire"]} />
      </div>

      {/* Services additionnels */}
      <h2 className="text-2xl font-semibold text-pink-500 mb-4">Services IA & Options</h2>
      <ul className="space-y-2 text-lg mb-16">
        <li>- Mastering IA : <span className="text-white">4,90€ / track</span></li>
        <li>- Cover IA Pro : <span className="text-white">6,90€ / cover</span></li>
        <li>- Distribution digitale : <span className="text-white">14,90€ / single</span> ou <span className="text-white">39,90€ / album</span></li>
      </ul>

      {/* Licences */}
      <h2 className="text-2xl font-semibold text-pink-500 mb-4">Licences de Beats</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <LicenseCard type="Basique MP3" price="À partir de 14,90€" rights="Usage commercial limité" />
        <LicenseCard type="Premium WAV" price="À partir de 29,90€" rights="Usage commercial étendu" />
        <LicenseCard type="Exclusive" price="À partir de 99,90€" rights="Vente unique, droits exclusifs" />
        <LicenseCard type="Exclusive + Stems" price="Dès 149,90€" rights="Inclut les multipistes, exclusif" />
      </div>
    </section>
  )
}

function PlanCard({ name, price, features }: { name: string, price: string, features: string[] }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-md border border-zinc-700">
      <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-1 text-sm text-gray-300">
        {features.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>
    </div>
  )
}

function LicenseCard({ type, price, rights }: { type: string, price: string, rights: string }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-600">
      <h4 className="text-lg font-bold text-violet-400 mb-2">{type}</h4>
      <p className="text-xl font-semibold mb-1">{price}</p>
      <p className="text-sm text-gray-400">{rights}</p>
    </div>
  )
}
