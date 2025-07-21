export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Bienvenue sur BeatsMarket</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beatmaker du mois</h2>
        {/* Exemple de carte ou slider pour mettre en avant un beatmaker */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <p className="text-lg">Découvrez les meilleurs beats du mois sélectionnés pour vous.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recherche IA</h2>
        {/* Formulaire ou composant de recherche IA */}
        <input
          type="text"
          placeholder="Recherche de beats par IA..."
          className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Pourquoi nous ?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Beats exclusifs et originaux</li>
          <li>Tarifs transparents et flexibles</li>
          <li>Support pro et services IA intégrés</li>
        </ul>
      </section>
    </main>
  );
}
