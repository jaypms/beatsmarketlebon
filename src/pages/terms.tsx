import React from "react";

export default function TermsPage() {
  return (
    <section className="space-y-8 text-base md:text-lg leading-relaxed px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6">
        Conditions Générales de Vente et d’Utilisation
      </h1>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 1 – Définitions
        </h2>
        <p>
          BeatsMarket est une plateforme de mise en relation entre beatmakers et artistes. Les
          "beatmakers" proposent des productions musicales sous différentes licences, tandis que
          les "artistes" peuvent acheter et exploiter ces beats selon les droits acquis.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 2 – Objet
        </h2>
        <p>
          Les présentes CGVU régissent les relations contractuelles entre BeatsMarket, les
          beatmakers et les artistes, ainsi que l’utilisation des services offerts par la
          plateforme.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 3 – Acceptation des Conditions
        </h2>
        <p>
          L'inscription sur la plateforme implique l’acceptation pleine et entière des présentes
          CGVU.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 4 – Comptes utilisateurs
        </h2>
        <p>
          Les utilisateurs doivent fournir des informations exactes et tenir leur profil à jour.
          Chaque utilisateur est responsable de la sécurité de son compte.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 5 – Types de licences
        </h2>
        <p>
          BeatsMarket propose plusieurs licences : Basique MP3, Premium WAV, Exclusive, Exclusive
          + Stems. Chacune inclut des droits et fichiers spécifiques précisés sur la page "Offres".
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 6 – Tarifs et paiements
        </h2>
        <p>
          Les prix affichés sont TTC. Le paiement est sécurisé via Stripe. BeatsMarket perçoit une
          commission selon la formule choisie par le beatmaker.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 7 – Services additionnels
        </h2>
        <p>
          La plateforme offre des services IA de mastering, de création de covers, et de
          distribution digitale via Believe, sans commission.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 8 – Répartition des gains
        </h2>
        <p>
          BeatsMarket applique une commission sur chaque vente. Le reste est versé au beatmaker
          après déduction des frais Stripe et TVA.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 9 – Obligations des utilisateurs
        </h2>
        <p>
          Les utilisateurs s’engagent à respecter les lois en vigueur, à ne pas enfreindre les
          droits d’auteur, et à utiliser la plateforme de bonne foi.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 10 – Propriété intellectuelle
        </h2>
        <p>
          Les beats restent la propriété des beatmakers. L’achat d’une licence n’emporte pas la
          cession de la propriété mais un droit d’exploitation défini.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold font-['Poppins'] mb-2">
          Article 11 – Limitations techniques
        </h2>
        <p>
          La taille maximale autorisée pour les fichiers MP3, WAV et Stems est fixée à 60 Mo par
          fichier. Le système accepte plusieurs fichiers pour les Stems.
        </p>
      </div>
    </section>
  );
}