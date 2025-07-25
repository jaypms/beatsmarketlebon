import React from "react";
import { FaMusic, FaStore, FaRobot, FaGlobe, FaFileInvoiceDollar, FaBullhorn, FaStar, FaMedal, FaHashtag, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-200 font-sans bg-[#121212] min-h-screen">
      <h1 className="text-4xl font-bold mb-8 font-['Poppins'] text-white text-center">
        À propos de BeatsMarket
      </h1>

      <section className="mb-12 space-y-4">
        <p className="text-lg leading-relaxed">
          BeatsMarket est bien plus qu’une simple marketplace musicale. C’est une plateforme créée par des passionnés de musique, pour offrir aux beatmakers et artistes un environnement professionnel, moderne et équitable. Notre mission ? Fournir les meilleurs outils pour vendre, créer, promouvoir et gérer leur carrière musicale en toute autonomie.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 font-['Poppins']">Notre manifeste</h2>
        <p className="leading-relaxed">
          Nous croyons que chaque talent mérite d’être mis en lumière. C’est pourquoi nous avons conçu une plateforme complète qui respecte vos droits, optimise votre temps et augmente votre visibilité, tout en assurant une expérience simple, fluide et sécurisée.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 font-['Poppins'] text-white text-center">
          Plans d’abonnement Beatmakers
        </h2>

        <div className="space-y-10">
          {/* Plan Gratuit */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaMusic /> Plan Gratuit — <span className="text-pink-500">0 € / mois</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><FaMusic className="inline mr-2 text-pink-400" /> Nombre de beats mis en ligne : <b>5</b></li>
              <li><FaStore className="inline mr-2 text-pink-400" /> Boutique Pro personnalisable</li>
              <li><FaRobot className="inline mr-2 text-pink-400" /> Accès au mastering IA & cover IA</li>
              <li><FaGlobe className="inline mr-2 text-pink-400" /> Distribution digitale incluse</li>
              <li><FaFileInvoiceDollar className="inline mr-2 text-pink-400" /> Gestion des droits musicaux</li>
              <li><FaChartLine className="inline mr-2 text-pink-400" /> Outils de vente & factures</li>
            </ul>
          </div>

          {/* Plan Bronze */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaMedal /> Plan Bronze — <span className="text-pink-500">10 € / mois</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><FaMusic className="inline mr-2 text-pink-400" /> Nombre de beats mis en ligne : <b>20</b></li>
              <li><FaStore className="inline mr-2 text-pink-400" /> Boutique Pro personnalisable</li>
              <li><FaRobot className="inline mr-2 text-pink-400" /> Accès au mastering IA & cover IA</li>
              <li><FaGlobe className="inline mr-2 text-pink-400" /> Distribution digitale incluse</li>
              <li><FaFileInvoiceDollar className="inline mr-2 text-pink-400" /> Gestion des droits musicaux</li>
              <li><FaBullhorn className="inline mr-2 text-pink-400" /> Outils de promotion pour la boutique</li>
              <li><FaChartLine className="inline mr-2 text-pink-400" /> Outils de vente & factures</li>
              <li><FaStar className="inline mr-2 text-pink-400" /> 1 mise en avant par mois (1 semaine, choix beat ou boutique)</li>
            </ul>
          </div>

          {/* Plan Or */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaMedal /> Plan Or — <span className="text-pink-500">15 € / mois</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><FaMusic className="inline mr-2 text-pink-400" /> Nombre de beats mis en ligne : <b>50</b></li>
              <li><FaStore className="inline mr-2 text-pink-400" /> Boutique Pro personnalisable</li>
              <li><FaRobot className="inline mr-2 text-pink-400" /> Accès au mastering IA & cover IA</li>
              <li><FaGlobe className="inline mr-2 text-pink-400" /> Distribution digitale incluse</li>
              <li><FaFileInvoiceDollar className="inline mr-2 text-pink-400" /> Gestion des droits musicaux</li>
              <li><FaBullhorn className="inline mr-2 text-pink-400" /> Outils de promotion pour la boutique</li>
              <li><FaChartLine className="inline mr-2 text-pink-400" /> Outils de vente & factures</li>
              <li><FaStar className="inline mr-2 text-pink-400" /> 1 mise en avant par mois (1 semaine, choix beat ou boutique)</li>
            </ul>
          </div>

          {/* Plan Diamant */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaMedal /> Plan Diamant — <span className="text-pink-500">20 € / mois</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><FaMusic className="inline mr-2 text-pink-400" /> Nombre de beats mis en ligne : <b>100</b></li>
              <li><FaStore className="inline mr-2 text-pink-400" /> Boutique Pro personnalisable</li>
              <li><FaRobot className="inline mr-2 text-pink-400" /> Accès au mastering IA & cover IA</li>
              <li><FaGlobe className="inline mr-2 text-pink-400" /> Distribution digitale incluse</li>
              <li><FaFileInvoiceDollar className="inline mr-2 text-pink-400" /> Gestion des droits musicaux</li>
              <li><FaBullhorn className="inline mr-2 text-pink-400" /> Outils de promotion pour la boutique</li>
              <li><FaChartLine className="inline mr-2 text-pink-400" /> Outils de vente & factures</li>
              <li><FaStar className="inline mr-2 text-pink-400" /> 2 mises en avant par mois :</li>
              <ul className="list-disc list-inside ml-6 text-gray-400">
                <li>1 mise en avant beat (1 semaine)</li>
                <li>1 mise en avant boutique (1 semaine)</li>
              </ul>
            </ul>
          </div>

          {/* Plan Diamant Plus */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaMedal /> Plan Diamant Plus — <span className="text-pink-500">25 € / mois</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><FaMusic className="inline mr-2 text-pink-400" /> Beats illimités</li>
              <li><FaStore className="inline mr-2 text-pink-400" /> Boutique Pro personnalisable</li>
              <li><FaRobot className="inline mr-2 text-pink-400" /> Accès au mastering IA & cover IA</li>
              <li><FaGlobe className="inline mr-2 text-pink-400" /> Distribution digitale incluse</li>
              <li><FaFileInvoiceDollar className="inline mr-2 text-pink-400" /> Gestion des droits musicaux</li>
              <li><FaBullhorn className="inline mr-2 text-pink-400" /> Outils de promotion pour la boutique</li>
              <li><FaHashtag className="inline mr-2 text-pink-400" /> Outils de promotion réseaux sociaux : textes personnalisés + hashtags optimisés</li>
              <li><FaChartLine className="inline mr-2 text-pink-400" /> Outils de vente & factures</li>
              <li><FaStar className="inline mr-2 text-pink-400" /> 4 mises en avant par mois :</li>
              <ul className="list-disc list-inside ml-6 text-gray-400">
                <li>2 mises en avant beats (1 semaine chacune)</li>
                <li>2 mises en avant boutiques (1 semaine chacune)</li>
              </ul>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-400 italic text-center max-w-xl mx-auto">
          * Les mises en avant ne sont pas cumulables d’un mois sur l’autre. Chaque mois, les mises en avant se réinitialisent selon le nombre autorisé par votre plan. Si vous avez besoin de mises en avant supplémentaires, vous pouvez en acheter directement depuis votre espace d’administration.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 font-['Poppins'] text-white text-center">À propos de la Boutique Pro</h2>
        <p className="leading-relaxed text-gray-300 max-w-3xl mx-auto text-center">
          Chaque beatmaker bénéficie d’une boutique professionnelle personnalisable où il peut présenter son catalogue de beats et services. Les options disponibles dans la boutique varient selon le plan d’abonnement, offrant un contrôle complet pour mieux promouvoir son travail.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 font-['Poppins'] text-white text-center">Pourquoi choisir BeatsMarket ?</h2>
        <ul className="list-disc list-inside max-w-3xl mx-auto space-y-3 text-gray-300">
          <li>💡 Une plateforme pensée par des passionnés, pour des passionnés</li>
          <li>🎨 Interface intuitive et design moderne en dark mode</li>
          <li>🤖 Services intelligents d’assistance avec IA (Mastering, Cover, etc.)</li>
          <li>🌍 Distribution digitale simplifiée et sécurisée</li>
          <li>🎼 Gestion complète des droits et royalties</li>
          <li>📈 Outils puissants pour la promotion et la vente</li>
        </ul>
        <p className="mt-6 text-center text-gray-400">
          Nous sommes engagés à vous fournir les meilleurs outils pour réussir, tout en respectant vos droits et votre créativité.
        </p>
      </section>
    </main>
  );
}