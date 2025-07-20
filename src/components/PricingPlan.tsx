import React from "react"

interface PricingPlanProps {
  name: string
  price: string
  commission: string
  beatsLimit: number | string
  support: string
  masteringCoverIA: boolean
  statsAvancees: boolean
  miseEnAvantBeat: number
  miseEnAvantBoutique: number
  description: string
}

export default function PricingPlan({
  name,
  price,
  commission,
  beatsLimit,
  support,
  masteringCoverIA,
  statsAvancees,
  miseEnAvantBeat,
  miseEnAvantBoutique,
  description,
}: PricingPlanProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <h3 className="text-2xl font-bold mb-4 text-white">{name}</h3>
      <div className="text-3xl font-extrabold mb-4 text-pink-500">{price}</div>
      <p className="mb-2 text-gray-300">Commission : {commission}</p>
      <p className="mb-2 text-gray-300">Limite beats : {beatsLimit}</p>
      <p className="mb-2 text-gray-300">{support}</p>

      <ul className="list-disc list-inside text-gray-400 mb-4 flex-1">
        {masteringCoverIA && <li>Accès complet Mastering IA & Cover IA</li>}
        {statsAvancees && <li>Statistiques avancées</li>}
        {miseEnAvantBeat > 0 && <li>Mise en avant de beat : {miseEnAvantBeat} fois/mois</li>}
        {miseEnAvantBoutique > 0 && <li>Mise en avant de boutique : {miseEnAvantBoutique} fois/mois</li>}
      </ul>

      <p className="text-sm text-gray-400 mt-auto">{description}</p>
    </div>
  )
}
