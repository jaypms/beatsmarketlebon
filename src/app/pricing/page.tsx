"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
  // Données Plans Beatmakers
  const plans = [
    {
      name: "Gratuit",
      price: "0 € / mois",
      commission: "35%",
      beatsLimit: 10,
      support: "Support de base",
      masteringCoverIA: true,
      statsAvancees: false,
      miseEnAvantBeat: 0,
      miseEnAvantBoutique: 0,
      description:
        "Pour bien démarrer, vente de toutes les licences, accès mastering et cover IA inclus.",
    },
    {
      name: "Bronze",
      price: "10 € / mois",
      commission: "20%",
      beatsLimit: 30,
      support: "Support développé",
      masteringCoverIA: true,
      statsAvancees: true,
      miseEnAvantBeat: 0,
      miseEnAvantBoutique: 0,
      description:
        "Pour les créateurs réguliers, accès complet aux outils IA et statistiques avancées.",
    },
    {
      name: "Or",
      price: "15 € / mois",
      commission: "15%",
      beatsLimit: 50,
      support: "Support développé",
      masteringCoverIA: true,
      statsAvancees: true,
      miseEnAvantBeat: 0,
      miseEnAvantBoutique: 0,
      description:
        "Pour les pros ambitieux, accès complet aux outils IA et statistiques avancées.",
    },
    {
      name: "Diamant",
      price: "20 € / mois",
      commission: "10%",
      beatsLimit: 100,
      support: "Support développé",
      masteringCoverIA: true,
      statsAvancees: true,
      miseEnAvantBeat: 1,
      miseEnAvantBoutique: 1,
      description:
        "Dominez le marché avec 1 mise en avant beat et boutique chaque semaine.",
    },
    {
      name: "Diamant Plus",
      price: "29,90 € / mois",
      commission: "0%",
      beatsLimit: "Illimité",
      support: "Support développé",
      masteringCoverIA: true,
      statsAvancees: true,
      miseEnAvantBeat: 2,
      miseEnAvantBoutique: 2,
      description:
        "Liberté totale avec 2 mises en avant beat et boutique par semaine.",
    },
  ]

  // Licences sans prix (les beatmakers fixent leurs prix)
  const licenses = [
    {
      name: "Licence Basique MP3",
      description:
        "Usage personnel et non commercial limité. Autorisé pour les plateformes de streaming avec seuil de 100k streams.",
      files: "MP3 haute qualité",
      rights:
        "Usage non-exclusif, pas de diffusion radio ni TV, crédit requis.",
    },
    {
      name: "Licence Premium WAV",
      description:
        "Utilisation commerciale modérée, jusqu’à 500k streams. Clip YouTube autorisé.",
      files: "WAV + MP3",
      rights:
        "Non-exclusif, diffusion limitée, monétisation partielle autorisée.",
    },
    {
      name: "Licence Exclusive",
      description:
        "Usage commercial illimité, sauf modifications de stems. 1 million de streams autorisés.",
      files: "WAV + MP3 + contrat PDF",
      rights:
        "Exclusivité temporaire, pas de revente ni modification structurelle.",
    },
    {
      name: "Exclusive + Stems",
      description:
        "Tous droits d'exploitation commerciale + mixage personnalisé avec stems.",
      files: "WAV + MP3 + stems + contrat PDF",
      rights:
        "Exclusivité complète sauf revente. Aucune redistribution du beat autorisée.",
    },
  ]

  return (
    <main className="bg-background min-h-screen text-white px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Plans Beatmakers */}
        <section id="plans" className="space-y-8">
          <h1 className="text-4xl font-extrabold text-center mb-8">
            Nos plans pour beatmakers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className="bg-neutral-900 border border-neutral-800 text-white"
              >
                <CardContent className="flex flex-col p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-pink-500">{plan.name}</h2>
                  <p className="text-lg font-semibold">{plan.price}</p>
                  <p className="text-sm">{plan.description}</p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Commission sur ventes : {plan.commission}</li>
                    <li>Limite beats : {plan.beatsLimit}</li>
                    <li>Support : {plan.support}</li>
                    <li>
                      Accès Mastering & Cover IA :{" "}
                      {plan.masteringCoverIA ? "Oui" : "Non"}
                    </li>
                    <li>
                      Statistiques avancées :{" "}
                      {plan.statsAvancees ? "Oui" : "Non"}
                    </li>
                    <li>
                      Mises en avant beat / boutique par semaine :{" "}
                      {plan.miseEnAvantBeat} / {plan.miseEnAvantBoutique}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Licences disponibles */}
        <section
          id="licenses"
          className="w-full py-16 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-center">
              Licences disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {licenses.map((license, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white shadow-md backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{license.name}</h3>
                  <p className="text-sm text-white/80 mb-3">{license.description}</p>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>Fichiers fournis :</strong> {license.files}
                    </li>
                    <li>
                      <strong>Droits :</strong> {license.rights}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services IA à la carte */}
        <section className="mt-20 w-full max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb
