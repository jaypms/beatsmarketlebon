import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface PricingPlanProps {
  name: string
  price: string
  commission: string
  beatsLimit: string
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
    <Card className="max-w-md mx-auto border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-xl text-pink-500 font-extrabold mb-4">{price}</p>
        <p><strong>Commission :</strong> {commission}</p>
        <p><strong>Limite de beats :</strong> {beatsLimit}</p>
        <p><strong>Support :</strong> {support}</p>
        <p><strong>Mastering & Cover IA :</strong> {masteringCoverIA ? "Oui" : "Non"}</p>
        <p><strong>Statistiques avancées :</strong> {statsAvancees ? "Oui" : "Non"}</p>
        <p><strong>Mises en avant beats :</strong> {miseEnAvantBeat} fois / mois</p>
        <p><strong>Mises en avant boutique :</strong> {miseEnAvantBoutique} fois / mois</p>
        <p className="mt-3 text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
