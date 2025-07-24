import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0025] to-[#300340] text-white font-poppins">
      {/* En-tête */}
      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold mb-8">Bienvenue sur BeatsMarket</h1>
        <p className="text-lg max-w-3xl mx-auto">
          La plateforme ultime pour beatmakers et artistes. Vendez, achetez, créez avec la puissance de l’IA et une communauté passionnée.
        </p>
      </header>

      {/* Beatmaker du mois */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Beatmaker du mois</h2>
        {/* Composant BeatmakerDuMois à intégrer ici */}
      </section>

      {/* Recherche IA */}
      <section className="container mx-auto px-6 py-12 bg-[#1a0025] rounded-lg my-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Recherche IA</h2>
        {/* Composant RechercheIA à intégrer ici */}
      </section>

      {/* Pourquoi nous ? */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Pourquoi nous ?</h2>
        <p className="text-lg max-w-4xl mx-auto text-center leading-relaxed">
          BeatsMarket révolutionne la manière de vendre et d’acheter des beats grâce à une interface intuitive,
          des licences claires, des services IA exclusifs, et une communauté engagée.
        </p>
      </section>

      {/* Footer - à créer et intégrer */}
    </main>
  );
}
