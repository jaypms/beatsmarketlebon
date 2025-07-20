import React from "react"
import PricingPlan from "@/components/PricingPlan"
import SubscriptionForm from "@/components/SubscriptionForm"
import Footer from "@/components/Footer"

const plans = [
  { name: "Gratuit", price: "0 €", commission: "35%", beatLimit: "Jusqu'à 10 beats", features: ["Vente de toutes les licences (Basique, Premium, Exclusive, Exclusive + Stems)", "Support de base", "Accès complet au Mastering IA", "Accès complet au Cover IA"], highlighted: false },
  { name: "Bronze", price: "10 €", commission: "20%", beatLimit: "Jusqu'à 30 beats", features: ["Vente de toutes les licences", "Support plus développé", "Statistiques avancées", "Accès complet au Mastering IA", "Accès complet au Cover IA"], highlighted: false },
  { name: "Or", price: "15 €", commission: "15%", beatLimit: "Jusqu'à 50 beats", features: ["Vente de toutes les licences", "Support plus développé", "Statistiques avancées", "Accès complet au Mastering IA", "Accès complet au Cover IA"], highlighted: false },
  { name: "Diamant", price: "20 €", commission: "10%", beatLimit: "Jusqu'à 100 beats", features: ["Vente de toutes les licences", "Support plus développé", "Statistiques avancées", "1 mise en avant de beat par semaine (1 fois par mois)", "1 mise en avant de boutique par semaine (1 fois par mois)", "Accès complet au Mastering IA", "Accès complet au Cover IA"], highlighted: true },
  { name: "Diamant Plus", price: "29,90 €", commission: "0%", beatLimit: "Beats illimités", features: ["Vente de toutes les licences", "Support plus développé", "Statistiques avancées", "2 mises en avant de beat par semaine (1 fois par mois)", "2 mises en avant de boutique par semaine (1 fois par mois)", "Accès complet au Mastering IA", "Accès complet au Cover IA"], highlighted: false },
]

export default function Pricing() {

  const handleSubscribe = (planName: string) => {
    alert(`Merci pour votre souscription au plan : ${planName}`)
    // Ici tu peux ajouter la logique pour la souscription réelle (appel API, redirection, etc.)
  }

  return (
    <>
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

        {/* Formulaire d'abonnement */}
        <SubscriptionForm
          plans={plans.map(({ name, price }) => ({ name, price }))}
          onSubscribe={handleSubscribe}
        />
      </main>
      <Footer />
    </>
  )
}
