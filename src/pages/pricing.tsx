import React from "react";

export default function PricingPage() {
  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-6 py-12 max-w-6xl mx-auto font-['PT_Sans', 'Poppins']">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
          Tarifs & Formules
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          Découvrez nos offres adaptées aux besoins des beatmakers et artistes, avec des
          services flexibles et transparents.
        </p>
      </header>

      {/* Plans d'abonnement */}
      <section className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
        <PricingCard
          title="Gratuit"
          price="0€ / mois"
          features={[
            "Publication de 1 beat",
            "Licence Basique MP3 uniquement",
            "Support standard",
          ]}
          highlight={false}
        />
        <PricingCard
          title="Bronze"
          price="9,90€ / mois"
          features={[
            "Jusqu’à 10 beats publiés",
            "Licences Basique et Premium",
            "Mastering IA offert (1 par mois)",
            "Support prioritaire",
          ]}
          highlight={false}
        />
        <PricingCard
          title="Or"
          price="29,90€ / mois"
          features={[
            "Beats illimités",
            "Toutes les licences incluses",
            "Mastering IA illimité",
            "Distribution digitale gratuite",
            "Support premium 24/7",
          ]}
          highlight={true}
        />
      </section>

      {/* Services additionnels */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center font-['Poppins']">
          Services Additionnels
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg leading-relaxed font-['PT_Sans']">
          <li>Mastering IA : 9,90€ par piste</li>
          <li>Création de covers IA : 14,90€ par cover</li>
          <li>Distribution digitale via Believe : 14,90€ (single) / 39,90€ (album)</li>
          <li>Promotions personnalisées disponibles selon plan</li>
        </ul>
      </section>

      {/* Gestion des droits */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center font-['Poppins']">
          Gestion des droits et licences
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed font-['PT_Sans'] max-w-3xl mx-auto">
          Nos licences sont claires et adaptées à chaque usage. Consultez la page "Offres" pour
          plus de détails sur les droits accordés, les fichiers fournis, et les conditions
          d’utilisation.
        </p>
      </section>
    </main>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlight,
}: {
  title: string;
  price: string;
  features: string[];
  highlight: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-6 flex flex-col border ${
        highlight ? "border-pink-500 bg-[#2B2A35]" : "border-gray-700 bg-[#27282D]"
      } shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <h3 className="text-2xl font-bold mb-4 font-['Poppins']">{title}</h3>
      <p className="text-3xl font-extrabold mb-6">{price}</p>
      <ul className="mb-6 flex-1 space-y-2 text-gray-300 font-['PT_Sans']">
        {features.map((feature, idx) => (
          <li key={idx}>&#x2022; {feature}</li>
        ))}
      </ul>
      <button
        className={`mt-auto rounded-md py-2 px-4 font-semibold ${
          highlight
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-gray-600 text-gray-100 hover:bg-gray-700"
        } transition-colors duration-300`}
      >
        Choisir
      </button>
    </div>
  );
}