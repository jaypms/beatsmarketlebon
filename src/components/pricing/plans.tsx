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
];

export function PricingPlans() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="text-white px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Plans Beatmaker</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-6 border flex flex-col justify-between ${
              plan.highlighted
                ? "border-pink-600 bg-gradient-to-br from-pink-900/50 to-pink-700/20 shadow-lg"
                : "border-white/20 bg-white/5"
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.highlighted && <Crown className="text-yellow-400" />}
              </div>
              <p className="text-3xl font-extrabold mb-2">{plan.price}</p>
              <p className="italic text-sm mb-1">Commission sur les ventes : {plan.commission}</p>
              <p className="italic text-sm mb-4">{plan.beatLimit}</p>

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
                  onClick={() => setSelected(idx)}
                >
                  Choisir ce plan
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-md bg-[#111] border border-white/20 text-white rounded-xl">
                <h3 className="text-xl font-bold mb-4">Confirmer le plan {plan.name}</h3>
                <p className="mb-6">
                  Vous êtes sur le point de souscrire au plan <strong>{plan.name}</strong>. Voulez-vous continuer ?
                </p>
                <div className="flex justify-end gap-4">
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
