import React from "react"
import PricingPlan from "@/components/PricingPlan"

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    commission: "35%",
    beatLimit: "Jusqu'à 10 beats",
    features: [
      "Vente de toutes les licences (Basique, Premium, Exclusive, Exclusive + Stems)",
      "Support de base",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Bronze",
    price: "10 €",
    commission: "20%",
    beatLimit: "Jusqu'à 30 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Or",
    price: "15 €",
    commission: "15%",
    beatLimit: "Jusqu'à 50 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Diamant",
    price: "20 €",
    commission: "10%",
    beatLimit: "Jusqu'à 100 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "1 mise en avant de beat par semaine (1 fois par mois)",
      "1 mise en avant de boutique par semaine (1 fois par mois)",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: true,
  },
  {
    name: "Diamant Plus",
    price: "29,90 €",
    commission: "0%",
    beatLimit: "Beats illimités",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "2 mises en avant de beat par semaine (1 fois par mois)",
      "2 mises en avant de boutique par semaine (1 fois par mois)",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
]

const licenses = [
  {
    name: "Licence Basique (MP3)",
    target: "Artistes débutants, maquettes",
    files: "1 fichier MP3 (avec tag vocal)",
    rights:
      "Usage non-commercial, streams et ventes limités à 5 000 streams et 100 ventes maximum",
  },
  {
    name: "Licence Premium (WAV)",
    target: "Artistes indépendants pour plateformes de streaming",
    files: "1 MP3 + 1 WAV (haute qualité, sans tag)",
    rights:
      "Usage commercial avec limites élevées : jusqu'à 100 000 streams et 5 000 ventes",
  },
  {
    name: "Licence Exclusive",
    target: "Artistes signés, projets majeurs",
    files: "MP3 + WAV",
    rights:
      "Droits illimités, le beat est retiré de la vente après achat. Usage commercial complet.",
  },
  {
    name: "Licence Exclusive + Pistes (Stems)",
    target: "Pack ultime, contrôle total",
    files: "MP3 + WAV + pistes séparées",
    rights:
      "Même droits qu'Exclusive, avec accès aux pistes multipistes (stems) pour remix, mastering, etc.",
  },
]

export default function Pricing() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Nos offres</h1>

      {/* Plans */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {plans.map((plan) => {
          const supportFeature = plan.features.find((f) =>
            f.toLowerCase().includes("support")
          ) || "Support non défini"

          const masteringCoverIA = plan.features.some((f) =>
            f.toLowerCase().includes("mastering ia")
          )
          const statsAvancees = plan.features.some((f) =>
            f.toLowerCase().includes("statistiques avancées")
          )

          const miseEnAvantBeat = plan.features.some((f) =>
            f.toLowerCase().includes("mise en avant de beat")
          )
            ? 1
            : 0
          const miseEnAvantBoutique = plan.features.some((f) =>
            f.toLowerCase().includes("mise en avant de boutique")
          )
            ? 1
            : 0

          return (
            <PricingPlan
              key={plan.name}
              name={plan.name}
              price={plan.price}
              commission={plan.commission}
              beatsLimit={plan.beatLimit}
              support={supportFeature}
              masteringCoverIA={masteringCoverIA}
              statsAvancees={statsAvancees}
              miseEnAvantBeat={miseEnAvantBeat}
              miseEnAvantBoutique={miseEnAvantBoutique}
              description={plan.features.join(", ")}
            />
          )
        })}
      </div>

      {/* Licences */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Nos licences</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {licenses.map((lic) => (
            <div
              key={lic.name}
              className="border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 bg-gray-900"
            >
              <h3 className="text-xl font-semibold mb-2">{lic.name}</h3>
              <p className="italic text-sm mb-2">{lic.target}</p>
              <p><strong>Fichiers fournis :</strong> {lic.files}</p>
              <p className="mt-2 text-gray-400 text-sm">{lic.rights}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
