import React from "react";

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Nos tarifs</h1>
      <p className="mb-12">
        Bienvenue sur la page <strong>Nos tarifs</strong> de BeatsMarket. Ici, vous pouvez découvrir tous nos plans d’abonnement pour beatmakers, les options de mises en avant, la distribution digitale, ainsi que les services complémentaires pour développer votre carrière musicale.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Plans d’abonnement pour beatmakers</h2>
        <p className="mb-6">
          Choisissez le plan qui correspond à vos besoins et débloquez des fonctionnalités puissantes pour gérer votre boutique, promouvoir vos beats, et maximiser vos ventes.
        </p>

        <article className="mb-8 border p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Plan Gratuit — 0 € / mois</h3>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Boutique Pro complète</li>
            <li>Accès aux services Cover IA et Mastering IA</li>
            <li>Distribution digitale & gestion des droits musicaux</li>
            <li>Outils de gestion des ventes et factures</li>
            <li><strong>Nombre de beats vendables : 5</strong></li>
            <li><strong>Commission sur vente : 35%</strong></li>
            <li>Pas de mises en avant incluses</li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Choisir le plan Gratuit
          </button>
        </article>

        <article className="mb-8 border p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Plan Bronze — 10 € / mois</h3>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Toutes les fonctionnalités du plan Gratuit</li>
            <li>Accès aux outils de promotion de la boutique</li>
            <li><strong>Nombre de beats vendables : 20</strong></li>
            <li><strong>Commission sur vente : 20%</strong></li>
            <li>1 mise en avant (beat ou boutique) d’une semaine par mois</li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Choisir le plan Bronze
          </button>
        </article>

        <article className="mb-8 border p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Plan Or — 15 € / mois</h3>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Toutes les fonctionnalités du plan Bronze</li>
            <li><strong>Nombre de beats vendables : 50</strong></li>
            <li><strong>Commission sur vente : 15%</strong></li>
            <li>1 mise en avant (beat ou boutique) d’une semaine par mois</li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Choisir le plan Or
          </button>
        </article>

        <article className="mb-8 border p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Plan Diamant — 20 € / mois</h3>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Toutes les fonctionnalités du plan Or</li>
            <li><strong>Nombre de beats vendables : 100</strong></li>
            <li><strong>Commission sur vente : 10%</strong></li>
            <li>2 mises en avant (1 beat + 1 boutique) d’une semaine par mois</li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Choisir le plan Diamant
          </button>
        </article>

        <article className="mb-8 border p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Plan Diamant Plus — 25 € / mois</h3>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Toutes les fonctionnalités du plan Diamant</li>
            <li>Beats illimités à vendre</li>
            <li><strong>Commission sur vente : 0%</strong></li>
            <li>2 mises en avant beat + 2 mises en avant boutique d’une semaine par mois</li>
            <li>Accès aux outils de promotion pour réseaux sociaux : textes optimisés et hashtags personnalisés</li>
            <li>Accès complet aux outils de gestion des ventes et factures</li>
          </ul>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Choisir le plan Diamant Plus
          </button>
        </article>

        <p className="italic mb-12 text-gray-600">
          <strong>Note importante :</strong>  
          Les mises en avant incluses dans chaque plan ne sont pas cumulables d’un mois à l’autre. Chaque mois, votre quota est remis à zéro. Si vous avez besoin de plus de mises en avant, vous pouvez en acheter directement depuis votre administration.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Mises en avant payantes</h2>
        <p className="mb-4">Boostez la visibilité de vos beats ou boutique avec des mises en avant personnalisées. Choisissez la cible et la durée, puis achetez en un clic.</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li><strong>Cible :</strong> Beat ou Boutique</li>
          <li><strong>Durée et prix :</strong></li>
          <ul className="list-disc ml-6 space-y-1">
            <li>1 jour : 2 €</li>
            <li>2 jours : 3 €</li>
            <li>1 semaine : 5 €</li>
            <li>1 mois : 8 €</li>
          </ul>
        </ul>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Acheter une mise en avant
        </button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Distribution digitale</h2>
        <p className="mb-4">Distribuez vos morceaux sur toutes les grandes plateformes de streaming et téléchargement légal.</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Single (1 titre) : 14,90 € TTC</li>
          <li>Album (jusqu’à 15 titres) : 39,90 € TTC</li>
          <li>Pas de commission BeatsMarket sur la distribution</li>
          <li>Paiement sécurisé via Stripe</li>
        </ul>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 mr-4">
          Distribuer un single
        </button>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Distribuer un album
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Services complémentaires</h2>
        <p className="mb-4">Améliorez la qualité de vos productions avec nos services intelligents :</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Mastering IA</li>
          <li>Création de cover (cover art) IA</li>
        </ul>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 mr-4">
          Commander un mastering
        </button>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Commander une cover
        </button>
      </section>

      <section className="mt-16 italic text-gray-600">
        <p>
          Tous les paiements se font via Stripe, garantissant sécurité et conformité.<br />
          La commission BeatsMarket est prélevée automatiquement à chaque vente selon votre plan.<br />
          Avant de pouvoir vendre, les beatmakers doivent impérativement configurer leur compte Stripe.<br />
          Les mises en avant ne sont pas cumulables : chaque mois, vous retrouvez le quota inclus dans votre plan.<br />
          Les beats vendus restent téléchargeables pendant un an après achat, ainsi que les licences associées.<br />
          Les services IA (Mastering, Cover) restent téléchargeables 3 jours après commande.
        </p>
      </section>
    </main>
  );
}