<section className="w-full py-16 border-t border-white/10" id="licenses">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-center">
      Licences disponibles
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          name: "Licence Basique MP3",
          description:
            "Usage personnel et non commercial limité. Autorisé pour les plateformes de streaming avec seuil de 100k streams.",
          files: "MP3 haute qualité",
          rights:
            "Usage non-exclusif, pas de diffusion radio ni TV, crédit requis.",
        },
        {
          name: "Licence Premium WAV",
          description:
            "Utilisation commerciale modérée, jusqu’à 500k streams. Clip YouTube autorisé.",
          files: "WAV + MP3",
          rights:
            "Non-exclusif, diffusion limitée, monétisation partielle autorisée.",
        },
        {
          name: "Licence Exclusive",
          description:
            "Usage commercial illimité, sauf modifications de stems. 1 million de streams autorisés.",
          files: "WAV + MP3 + contrat PDF",
          rights:
            "Exclusivité temporaire, pas de revente ni modification structurelle.",
        },
        {
          name: "Exclusive + Stems",
          description:
            "Tous droits d'exploitation commerciale + mixage personnalisé avec stems.",
          files: "WAV + MP3 + stems + contrat PDF",
          rights:
            "Exclusivité complète sauf revente. Aucune redistribution du beat autorisée.",
        },
      ].map((license, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white shadow-md backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-2">{license.name}</h3>
          <p className="text-sm text-white/80 mb-3">{license.description}</p>
          <ul className="text-sm space-y-1">
            <li>
              <strong>Fichiers fournis :</strong> {license.files}
            </li>
            <li>
              <strong>Droits :</strong> {license.rights}
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
