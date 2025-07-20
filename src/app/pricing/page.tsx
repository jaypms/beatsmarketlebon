"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
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

  // Données mises en avant
  const promotions = [
    { duration: "1 jour", price: "1 €" },
    { duration: "1 semaine", price: "3 €" },
    { duration: "2 semaines", price: "5 €" },
    { duration: "1 mois", price: "8 €" },
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

        {/* Mises en avant & tarifs */}
        <section id="promotions" className="w-full max-w-5xl mx-auto px-4 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 text-center">
            Mises en avant et tarifs
          </h2>
          <p className="text-center text-white/80 mb-6 max-w-3xl mx-auto">
            Augmentez la visibilité de vos beats ou de votre boutique avec nos offres de mises en avant.
            Les durées sont cumulables et renouvelables chaque mois.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-md mx-auto">
            {promotions.map(({ duration, price }, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white shadow-md backdrop-blur-sm text-center"
              >
                <p className="text-lg font-semibold">{duration}</p>
                <p className="text-pink-500 text-2xl font-bold">{price}</p>
              </div>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Services IA à la carte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-pink-600 bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">🎛️ Mastering IA</h3>
              <p className="text-zinc-300 mb-2">
                Obtiens un mastering professionnel de ton beat ou de ton morceau en quelques secondes.
              </p>
              <ul className="text-zinc-400 text-sm list-disc ml-4">
                <li>Qualité studio</li>
                <li>Analyse intelligente de la dynamique et des fréquences</li>
                <li>Export WAV 24 bits</li>
              </ul>
              <p className="mt-4 text-pink-500 font-medium">Disponible même pour les comptes gratuits</p>
            </div>

            <div className="rounded-2xl border border-pink-600 bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">🖼️ Cover IA</h3>
              <p className="text-zinc-300 mb-2">
                Génère une pochette d’album ou de single unique, avec intelligence artificielle.
              </p>
              <ul className="text-zinc-400 text-sm list-disc ml-4">
                <li>Choix du style, ambiance, couleurs</li>
                <li>Résolution haute qualité 3000x3000px</li>
                <li>Prête pour Spotify, Apple Music, etc.</li>
              </ul>
              <p className="mt-4 text-pink-500 font-medium">Inclus dès le plan gratuit</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
