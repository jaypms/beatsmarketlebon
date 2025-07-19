import React from "react"

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-darkbg px-6 py-16 text-white font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">À propos de BeatsMarket</h1>

        <p className="text-gray-300 text-sm mb-8">
          BeatsMarket est une plateforme révolutionnaire dédiée à la vente, la promotion et la distribution de beats. Elle offre un espace sécurisé, professionnel, et propulsé par l’IA pour les artistes et les beatmakers du monde entier.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">Notre mission</h2>
        <p className="text-gray-400 text-sm mb-8">
          Offrir à chaque créateur musical les outils, la visibilité et la liberté nécessaire pour monétiser ses créations de manière équitable, professionnelle et internationale.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">Notre vision</h2>
        <p className="text-gray-400 text-sm mb-8">
          Un monde musical plus transparent, plus connecté, où chaque talent, où qu’il soit, a les moyens de réussir.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">Les outils disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {[
            ["Boutique Pro", "Vendez vos beats avec licences intelligentes."],
            ["Mastering IA", "Obtenez un rendu professionnel en 2 clics."],
            ["Générateur de covers", "Des visuels attrayants pour vos sorties."],
            ["Distribution digitale", "Diffusez votre musique sur toutes les plateformes."],
            ["Statistiques détaillées", "Suivez vos ventes, écoutes et revenus."],
            ["Paiements rapides", "Grâce à l’intégration Stripe sécurisée."]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#1e1e1e] p-4 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
