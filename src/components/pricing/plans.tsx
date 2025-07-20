"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    commission: "35%",
    beatLimit: "Jusqu'à 10 beats",
    features: [
      "Support de base",
      "Vente de toutes les licences disponibles",
      "Pas d'accès aux services IA",
      "Statistiques de base",
    ],
    highlighted: false,
  },
  {
    name: "Bronze",
    price: "10 € / mois",
    commission: "20%",
    beatLimit: "Jusqu'à 30 beats",
    features: [
      "Support développé",
      "Accès au mastering IA et cover IA",
      "Statistiques avancées",
      "Vente MP3 & WAV",
    ],
    highlighted: false,
  },
  {
    name: "Or",
    price: "15 € / mois",
    commission: "15%",
    beatLimit: "Jusqu'à 50 beats",
    features: [
      "Support développé",
      "Accès au mastering IA et cover IA",
      "Statistiques avancées",
      "Vente MP3, WAV & Stems",
      "Mastering + Covers IA",
    ],
    highlighted: true,
  },
  {
    name: "Diamant",
    price: "20 € / mois",
    commission: "10%",
    beatLimit: "Jusqu'à 100 beats",
    features: [
      "Support développé",
      "Statistiques avancées",
      "1 mise en avant de beat par semaine (1x par mois)",
      "1 mise en avant de boutique par semaine (1x par mois)",
    ],
    highlighted: false,
  },
  {
    name: "Diamant Plus",
    price: "29 € / mois",
    commission: "0%",
    beatLimit: "Beats illimités",
    features: [
      "Support développé",
      "Statistiques avancées",
      "2 mises en avant de beat par semaine (1x par mois)",
      "2 mises en avant de boutique par semaine (1x par mois)",
    ],
    highlighted: false,
  },
];

export function PricingPlans() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Plans Beatmaker</h2>
      <div className="grid md:grid-cols-5 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 border ${
              plan.highlighted
                ? "border-pink-600 bg-gradient-to-br from-pink-900/50 to-pink-700/10 shadow-lg"
                : "border-white/10 bg-white/5"
            } flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.highlighted && <Crown className="text-yellow-400" />}
              </div>
              <p className="text-2xl font-bold my-2">{plan.price}</p>
              <p className="text-sm italic mb-1">Commission sur les ventes : {plan.commission}</p>
              <p className="text-sm italic mb-4">{plan.beatLimit}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="mt-6 w-full"
                  variant={plan.highlighted ? "default" : "secondary"}
                  onClick={() => setSelected(index)}
                >
                  Choisir
                </Button>
              </DialogTrigger>
              <DialogContent className="text-white bg-[#111] border-white/10 max-w-md">
                <h3 className="text-xl font-bold mb-4">
                  Confirmer le plan {plan.name}
                </h3>
                <p className="mb-6">
                  Souhaitez-vous souscrire à l’offre <strong>{plan.name}</strong> ? Cela activera automatiquement les avantages liés à ce plan.
                </p>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => setSelected(null)}>
                    Annuler
                  </Button>
                  <Button onClick={() => setSelected(null)}>Confirmer</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
