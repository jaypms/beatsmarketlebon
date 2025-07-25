import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-gray-200 bg-gray-900 min-h-screen font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-['Poppins']">
        Conditions Générales de Vente et d’Utilisation (CGVU)
      </h1>

      <section className="space-y-10 text-base md:text-lg leading-relaxed">
        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 1 – Définitions</h2>
          <p>
            BeatsMarket est une plateforme de mise en relation entre beatmakers et artistes.
            Les "beatmakers" proposent des productions musicales sous différentes licences,
            tandis que les "artistes" peuvent acheter et exploiter ces beats selon les droits acquis.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 2 – Objet</h2>
          <p>
            Les présentes CGVU régissent les relations contractuelles entre BeatsMarket,
            les beatmakers et les artistes, ainsi que l’utilisation des services offerts par la plateforme.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 3 – Acceptation des Conditions</h2>
          <p>
            Pour utiliser la plateforme, il est obligatoire d’accepter les présentes Conditions
            Générales de Vente et d’Utilisation, qui sont proposées lors de la création du compte utilisateur.
            Sans acceptation, l’accès aux services est impossible.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 4 – Comptes utilisateurs</h2>
          <p>
            Chaque utilisateur s’engage à fournir des informations exactes et à tenir son profil à jour.
            La sécurité de chaque compte est de la responsabilité de son titulaire.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 5 – Types de licences</h2>
          <p>
            BeatsMarket propose plusieurs licences pour l’utilisation des beats, chacune définissant des droits et fichiers spécifiques :
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Licence Basique MP3</strong> : MP3, usage personnel et commercial limité, non exclusive.</li>
            <li><strong>Licence Premium WAV</strong> : WAV haute qualité, usage commercial étendu, non exclusive.</li>
            <li><strong>Licence Exclusive</strong> : Droits exclusifs, beat retiré de la plateforme, fichiers WAV et MP3 fournis.</li>
            <li><strong>Licence Exclusive Multipistes</strong> : Idem exclusive, avec stems multipistes fournis. Beat retiré de la plateforme.</li>
          </ul>
          <p>
            Chaque beat reste la propriété exclusive du beatmaker. L’achat d’une licence donne un droit d’exploitation limité, sans transfert de propriété.
            Les beatmakers accordent à BeatsMarket une licence d’exposition pour présenter leurs beats.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 6 – Tarifs et paiements</h2>
          <p>
            Tous les paiements sont effectués exclusivement via Stripe, un système de paiement sécurisé.
            BeatsMarket ne collecte, ne stocke ni ne gère aucune donnée bancaire des clients.
            Toutes les transactions passent directement par Stripe, garantissant la sécurité et la confidentialité des informations.
          </p>
          <p>
            Il est strictement interdit de vendre ou d’acheter des beats en dehors de la plateforme.
            BeatsMarket décline toute responsabilité en cas de transaction ou d’accord conclu hors site.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 7 – Services additionnels</h2>
          <p>
            La plateforme propose des services complémentaires tels que mastering, création de covers,
            distribution digitale, et gestion des droits musicaux.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 8 – Abonnements Beatmakers</h2>
          <table className="w-full border border-gray-700 text-left text-sm md:text-base">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 border border-gray-700">Plan</th>
                <th className="px-4 py-2 border border-gray-700">Prix TTC/mois</th>
                <th className="px-4 py-2 border border-gray-700">Max beats</th>
                <th className="px-4 py-2 border border-gray-700">Commission BeatsMarket</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">Gratuit</td>
                <td className="px-4 py-2 border border-gray-700">0 €</td>
                <td className="px-4 py-2 border border-gray-700">5</td>
                <td className="px-4 py-2 border border-gray-700">35 %</td>
              </tr>
              <tr className="border border-gray-700 bg-gray-800">
                <td className="px-4 py-2 border border-gray-700">Bronze</td>
                <td className="px-4 py-2 border border-gray-700">10 €</td>
                <td className="px-4 py-2 border border-gray-700">20</td>
                <td className="px-4 py-2 border border-gray-700">20 %</td>
              </tr>
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">Or</td>
                <td className="px-4 py-2 border border-gray-700">15 €</td>
                <td className="px-4 py-2 border border-gray-700">50</td>
                <td className="px-4 py-2 border border-gray-700">15 %</td>
              </tr>
              <tr className="border border-gray-700 bg-gray-800">
                <td className="px-4 py-2 border border-gray-700">Diamant</td>
                <td className="px-4 py-2 border border-gray-700">20 €</td>
                <td className="px-4 py-2 border border-gray-700">100</td>
                <td className="px-4 py-2 border border-gray-700">10 %</td>
              </tr>
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">Diamant Plus</td>
                <td className="px-4 py-2 border border-gray-700">25 €</td>
                <td className="px-4 py-2 border border-gray-700">Illimité</td>
                <td className="px-4 py-2 border border-gray-700">0 %</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            En cas de rétrogradation, le beatmaker doit mettre sa boutique aux normes du nouveau plan avant toute vente.
            Le changement de plan peut être immédiat (sans remboursement des jours restants) ou à la date anniversaire.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 9 – Obligations des utilisateurs</h2>
          <p>
            Les utilisateurs doivent respecter les lois, ne pas violer les droits d’auteur, et utiliser la plateforme loyalement.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 10 – Propriété intellectuelle</h2>
          <p>
            Les beats restent la propriété des beatmakers. L’achat d’une licence accorde un droit d’exploitation limité.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 11 – Limitations techniques</h2>
          <p>
            Taille maximale des fichiers :<br/>
            - MP3 : 10 Mo par fichier<br/>
            - WAV : 60 Mo par fichier<br/>
            - Stems multipistes : 60 Mo max par piste (plusieurs pistes possibles)
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 11 bis – Suspension et suppression</h2>
          <p>
            BeatsMarket peut suspendre ou supprimer un compte sans remboursement en cas de non-respect des CGVU ou mauvais comportement.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 12 – Disponibilité</h2>
          <p>
            La plateforme est disponible 24/7 sauf force majeure. Le site est traduit en plusieurs langues et Stripe est utilisé selon disponibilité géographique.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 13 – Répartition des gains</h2>
          <p>
            Les commissions sont déduites selon le plan du beatmaker. Les gains sont versés après déduction de la TVA et frais Stripe.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 14 – Téléchargement</h2>
          <p>
            Après achat, beats et licences restent téléchargeables pendant un an. Services additionnels téléchargeables 3 jours.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 15 – Responsabilité</h2>
          <p>
            BeatsMarket n’est pas responsable du contenu des beats ni des droits d’auteur. Toute infraction relève de la responsabilité de l’utilisateur.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 16 – Données personnelles</h2>
          <p>
            Les données sont traitées conformément au RGPD. Les utilisateurs disposent de leurs droits d’accès, modification et suppression.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 17 – Modification des CGVU</h2>
          <p>
            Les CGVU peuvent être modifiées. Les utilisateurs seront informés et doivent accepter les nouvelles conditions.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 18 – Loi applicable</h2>
          <p>
            Les présentes conditions sont régies par le droit français.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 font-['Poppins']">Article 19 – Juridiction</h2>
          <p>
            Les tribunaux de La Rochelle sont compétents en cas de litige.
          </p>
        </article>
      </section>
    </main>
  );
}