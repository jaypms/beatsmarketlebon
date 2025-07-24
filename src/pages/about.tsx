import React from "react";
import { LucideIcon, ShoppingCart, Cpu, Database, Settings, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-6 py-12 max-w-6xl mx-auto font-['PT_Sans', 'Poppins']">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
          À Propos de BeatsMarket
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          BeatsMarket est une plateforme innovante réunissant beatmakers et artistes pour
          créer, partager et monétiser leurs productions musicales dans un univers moderne
          et convivial.
        </p>
      </header>

      <section className="mb-16 space-y-8 text-center max-w-4xl mx-auto font-['PT_Sans']">
        <h2 className="text-3xl font-semibold mb-6">Notre vision</h2>
        <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
          Créer un écosystème musical où la créativité des beatmakers est valorisée, où les
          artistes accèdent facilement à des beats de qualité, et où la technologie simplifie
          chaque étape du processus.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Carte outil */}
        <ToolCard
          icon={<ShoppingCart className="w-10 h-10 text-pink-500" />}
          title="Boutique Pro"
          description="Une boutique intuitive pour gérer vos beats, licences et ventes en toute simplicité."
        />
        <ToolCard
          icon={<Cpu className="w-10 h-10 text-pink-500" />}
          title="Mastering IA"
          description="Un service de mastering automatique alimenté par intelligence artificielle pour un son professionnel."
        />
        <ToolCard
          icon={<Database className="w-10 h-10 text-pink-500" />}
          title="Distribution digitale"
          description="Diffusez vos morceaux sur les principales plateformes via Believe sans commission."
        />
        <ToolCard
          icon={<Settings className="w-10 h-10 text-pink-500" />}
          title="Création de covers"
          description="Générez des pochettes d’album professionnelles avec notre IA de design graphique."
        />
        <ToolCard
          icon={<Users className="w-10 h-10 text-pink-500" />}
          title="Support dédié"
          description="Une équipe réactive et experte à votre service pour répondre à toutes vos questions."
        />
      </section>
    </main>
  );
}

function ToolCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#27282D] rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-['Poppins']">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}