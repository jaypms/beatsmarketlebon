export default function Pricing() {
  return (
    <main className="pt-20 bg-[#121212] min-h-screen text-white font-poppins px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-12 text-center">
        Nos Tarifs
      </h1>

      {/* Plans d'abonnement */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Gratuit */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center">Gratuit</h2>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>✔️ 3 beats en boutique</li>
            <li>✔️ Accès aux stats basiques</li>
            <li>❌ Pas de mastering IA</li>
            <li>❌ Pas de distribution digitale</li>
          </ul>
          <button className="w-full bg-pink-500 hover:bg-pink-400 py-3 rounded-md font-semibold transition">
            Choisir Gratuit
          </button>
        </div>

        {/* Bronze */}
        <div className="bg-gray-900 p-6 rounded-lg border border-pink-500 shadow-pink-600">
          <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
            Bronze
          </h2>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>✔️ 10 beats en boutique</li>
            <li>✔️ Statistiques avancées</li>
            <li>✔️ Mastering IA</li>
            <li>❌ Distribution digitale</li>
          </ul>
          <button className="w-full bg-pink-600 hover:bg-pink-500 py-3 rounded-md font-semibold transition text-white">
            Choisir Bronze
          </button>
        </div>

        {/* Or */}
        <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 shadow-yellow-500">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400">
            Or
          </h2>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>✔️ Beats illimités</li>
            <li>✔️ Statistiques premium</li>
            <li>✔️ Mastering IA avancé</li>
            <li>✔️ Distribution digitale</li>
          </ul>
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 py-3 rounded-md font-semibold transition text-black">
            Choisir Or
          </button>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Services Additionnels
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto text-center text-gray-300">
          <p>
            En plus de votre abonnement, profitez de services comme le mastering
            IA et la création de covers personnalisées pour vos beats.
          </p>
        </div>
      </section>

      {/* Gestion des droits */}
      <section>
        <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Gestion des droits & licences
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg max-w-4xl mx-auto text-gray-300 leading-relaxed">
          <p>
            Toutes nos licences vous garantissent des droits clairs sur vos achats
            de beats, avec des options allant de licences basiques MP3 à des
            exclusivités complètes avec stems.
          </p>
        </div>
      </section>
    </main>
  );
}
