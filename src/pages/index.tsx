import React from "react";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-6 py-12 max-w-7xl mx-auto font-['PT_Sans', 'Poppins']">
      {/* Section Beatmaker du mois */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">Beatmaker du mois</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          Découvrez le talent exceptionnel de ce mois, sélectionné pour sa créativité et son
          engagement.
        </p>
        {/* Placeholder pour profil beatmaker */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#27282D] rounded-lg p-8 max-w-sm w-full shadow-lg">
            <img
              src="/images/beatmaker-month.jpg"
              alt="Beatmaker du mois"
              className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2 font-['Poppins']">Jay Jay</h2>
            <p className="text-gray-400 text-sm mb-4">
              Beatmaker passionné avec plus de 500 ventes sur BeatsMarket.
            </p>
            <a
              href="/beatmakers/jayjay"
              className="inline-block text-pink-500 hover:text-pink-600 font-semibold"
            >
              Voir son profil
            </a>
          </div>
        </div>
      </section>

      {/* Section Recherche IA */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center font-['Poppins']">Recherche IA</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un beat, un artiste..."
            className="w-full rounded-md py-3 px-4 bg-[#27282D] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Search className="absolute right-4 top-3.5 w-6 h-6 text-pink-500" />
        </div>
      </section>

      {/* Section Pourquoi nous ? */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <WhyCard
          title="Qualité professionnelle"
          description="Des beats sélectionnés avec soin, adaptés à tous les styles et besoins."
        />
        <WhyCard
          title="Interface intuitive"
          description="Une plateforme simple, rapide et efficace pour acheter et vendre vos beats."
        />
        <WhyCard
          title="Services innovants"
          description="Mastering IA, distribution digitale, et bien plus pour vous accompagner."
        />
      </section>

      {/* Footer placeholder */}
      <footer className="mt-24 text-center text-gray-600 text-sm">
        &copy; 2025 BeatsMarket - Tous droits réservés
      </footer>
    </main>
  );
}

function WhyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#27282D] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3 font-['Poppins']">{title}</h3>
      <p className="text-gray-400 font-['PT_Sans']">{description}</p>
    </div>
  );
}
