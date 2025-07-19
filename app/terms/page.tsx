import React from "react"

export default function TermsPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-darkbg text-white font-ptsans">
      <h1 className="text-4xl font-bold text-primary mb-8">Conditions Générales de Vente et d’Utilisation</h1>

      <article className="space-y-6 text-gray-300 text-sm leading-relaxed max-w-5xl">
        <p>
          Bienvenue sur BeatsMarket. En utilisant notre site, vous acceptez sans réserve les présentes Conditions Générales de Vente et d'Utilisation.
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">1. Définitions</h2>
        <p>
          "Utilisateur" désigne toute personne utilisant le site. "Beatmaker" et "Artiste" désignent les utilisateurs professionnels inscrits.
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">2. Objet</h2>
        <p>
          Les CGV/CGU encadrent les relations entre BeatsMarket, les vendeurs (beatmakers) et les acheteurs (artistes).
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">3. Licences</h2>
        <p>
          Plusieurs types de licences sont proposées : Basique MP3, Premium WAV, Exclusive, Exclusive + Stems. Chaque licence définit des droits spécifiques.
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">4. Paiement & Commissions</h2>
        <p>
          Le paiement est géré via Stripe. BeatsMarket prélève une commission sur chaque vente. Tous les montants sont TTC.
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">5. Services</h2>
        <p>
          Les services additionnels incluent : mastering IA, création de covers, distribution digitale via Believe, etc.
        </p>

        <h2 className="text-white text-lg font-semibold mt-10">6. Droit applicable</h2>
        <p>
          Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux de Clermont-Ferrand.
        </p>

        <p className="text-xs mt-12 text-gray-500 italic">
          Dernière mise à jour : juillet 2025
        </p>
      </article>
    </section>
  )
}
