import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8 text-base md:text-lg leading-relaxed font-sans text-gray-100 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Conditions Générales de Vente et d’Utilisation (CGVU) de BeatsMarket</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 1 – Définitions</h2>
        <p>
          BeatsMarket est une plateforme de mise en relation entre beatmakers et artistes. Les "beatmakers" proposent des productions musicales sous différentes licences, tandis que les "artistes" peuvent acheter et exploiter ces beats selon les droits acquis.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 2 – Objet</h2>
        <p>
          Les présentes CGVU régissent les relations contractuelles entre BeatsMarket, les beatmakers et les artistes, ainsi que l’utilisation des services offerts par la plateforme.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 3 – Acceptation des Conditions</h2>
        <p>
          Pour utiliser la plateforme, il est obligatoire d’accepter les présentes Conditions Générales de Vente et d’Utilisation, qui sont proposées lors de la création du compte utilisateur. Sans acceptation, l’accès aux services est impossible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 4 – Comptes utilisateurs</h2>
        <p>
          Chaque utilisateur s’engage à fournir des informations exactes et à tenir son profil à jour. La sécurité de chaque compte est de la responsabilité de son titulaire.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 5 – Types de licences</h2>
        <p>BeatsMarket propose plusieurs licences pour l’utilisation des beats, chacune définissant des droits et fichiers spécifiques :</p>
        <ul className="list-disc list-inside ml-5 space-y-2">
          <li>
            <strong>Licence Basique MP3</strong> : Fourniture du beat au format MP3. Usage autorisé : exploitation personnelle ou commerciale avec droits limités. Non exclusive.
          </li>
          <li>
            <strong>Licence Premium WAV</strong> : Fourniture du beat au format WAV haute qualité. Usage plus étendu, commercial et promotionnel. Non exclusive.
          </li>
          <li>
            <strong>Licence Exclusive</strong> : Achat de droits exclusifs sur le beat. Le beat est retiré de la plateforme et n’est plus vendu à d’autres artistes. Fourniture des fichiers WAV et MP3.
          </li>
          <li>
            <strong>Licence Exclusive Multipistes (Exclusive + Stems)</strong> : Même conditions que la licence exclusive, mais avec fourniture des pistes multipistes (stems) séparées pour une flexibilité de production maximale. Le beat est retiré de la plateforme.
          </li>
        </ul>
        <p className="mt-4">
          Chaque beat reste la propriété exclusive du beatmaker. L’achat d’une licence donne un droit d’exploitation limité selon la licence choisie, sans transfert de propriété.
        </p>
        <p>
          Les beatmakers accordent à BeatsMarket une licence d’exposition pour présenter leurs beats sur la plateforme.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 6 – Tarifs et paiements</h2>
        <p>
          Les prix affichés sont toutes taxes comprises (TTC). Le paiement est sécurisé et géré via Stripe. BeatsMarket perçoit une commission selon le plan d’abonnement du beatmaker.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 7 – Services additionnels</h2>
        <p>
          La plateforme propose des services additionnels comme le mastering, la création de covers, la distribution digitale via Believe (sans commission), ainsi que la gestion des droits musicaux.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 8 – Abonnements Beatmakers</h2>
        <p>BeatsMarket propose cinq formules d’abonnement pour les beatmakers :</p>
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">Plan</th>
              <th className="border border-gray-700 px-4 py-2">Prix mensuel TTC</th>
              <th className="border border-gray-700 px-4 py-2">Nombre max de beats</th>
              <th className="border border-gray-700 px-4 py-2">Commission BeatsMarket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-4 py-2">Gratuit</td>
              <td className="border border-gray-700 px-4 py-2">0 €</td>
              <td className="border border-gray-700 px-4 py-2">5</td>
              <td className="border border-gray-700 px-4 py-2">35 %</td>
            </tr>
            <tr className="bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Bronze</td>
              <td className="border border-gray-700 px-4 py-2">10 €</td>
              <td className="border border-gray-700 px-4 py-2">20</td>
              <td className="border border-gray-700 px-4 py-2">20 %</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2">Or</td>
              <td className="border border-gray-700 px-4 py-2">15 €</td>
              <td className="border border-gray-700 px-4 py-2">50</td>
              <td className="border border-gray-700 px-4 py-2">15 %</td>
            </tr>
            <tr className="bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">Diamant</td>
              <td className="border border-gray-700 px-4 py-2">20 €</td>
              <td className="border border-gray-700 px-4 py-2">100</td>
              <td className="border border-gray-700 px-4 py-2">10 %</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2">Diamant Plus</td>
              <td className="border border-gray-700 px-4 py-2">25 €</td>
              <td className="border border-gray-700 px-4 py-2">Illimité</td>
              <td className="border border-gray-700 px-4 py-2">0 %</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">
          Tous les beatmakers bénéficient d’une boutique personnalisée adaptée à leur plan. En cas de changement vers un plan inférieur, le beatmaker doit mettre à jour sa boutique pour respecter les limites et règles du nouveau plan avant de pouvoir vendre.
        </p>
        <p>
          Le changement de plan peut être immédiat (perte des jours restants non remboursée) ou différé à la date anniversaire de l’abonnement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 9 – Obligations des utilisateurs</h2>
        <p>
          Les utilisateurs s’engagent à respecter les lois en vigueur, à ne pas violer les droits d’auteur, et à utiliser la plateforme de bonne foi.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 10 – Propriété intellectuelle</h2>
        <p>
          Les beats restent la propriété des beatmakers. L’achat d’une licence donne un droit d’exploitation limité et non la cession de propriété.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 11 – Limitations techniques</h2>
        <p>La taille maximale autorisée pour les fichiers uploadés est la suivante :</p>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>MP3 : 10 Mo maximum par fichier</li>
          <li>WAV : 60 Mo maximum par fichier</li>
          <li>Stems (multipistes) : 60 Mo maximum par piste individuelle, plusieurs fichiers acceptés</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 11 bis – Suspension et suppression de compte</h2>
        <p>
          La plateforme se réserve le droit de suspendre ou supprimer un compte sans remboursement en cas de mauvais comportement, mauvaise utilisation, ou signalement valable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 12 – Disponibilité du service</h2>
        <p>
          BeatsMarket s’engage à maintenir la plateforme en ligne 24/7, sauf cas de force majeure. Le site est traduit en plusieurs langues, et des efforts seront faits pour étendre la disponibilité des services selon l’évolution de Stripe et des besoins utilisateurs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 13 – Répartition des gains</h2>
        <p>
          La commission prélevée par BeatsMarket dépend du plan d’abonnement du beatmaker. Les gains sont automatiquement versés après déduction de la TVA et des frais Stripe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 14 – Téléchargement et conservation des fichiers</h2>
        <p>
          Après achat, les beats et licences restent téléchargeables pendant <strong>un an</strong>. Les produits des services additionnels (mastering, cover) restent téléchargeables pendant <strong>3 jours</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 15 – Responsabilité</h2>
        <p>
          BeatsMarket n’est pas responsable des contenus textuels ou sonores publiés par les utilisateurs. Les beatmakers garantissent détenir les droits nécessaires pour proposer leurs beats. Toute violation des droits d’auteur est sous la seule responsabilité de l’utilisateur concerné.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 16 – Données personnelles et RGPD</h2>
        <p>
          Les données personnelles sont collectées et traitées conformément au Règlement Général sur la Protection des Données (RGPD). Les utilisateurs peuvent exercer leurs droits d’accès, de rectification et de suppression.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 17 – Modification des CGVU</h2>
        <p>
          BeatsMarket se réserve le droit de modifier les présentes CGVU à tout moment. Les utilisateurs seront informés des changements et devront les accepter pour continuer à utiliser la plateforme.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 18 – Loi applicable</h2>
        <p>Les présentes conditions sont soumises au droit français.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Article 19 – Juridiction compétente</h2>
        <p>En cas de litige, les tribunaux de La Rochelle sont seuls compétents.</p>
      </section>
    </main>
  );
}
