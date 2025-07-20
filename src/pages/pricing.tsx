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
