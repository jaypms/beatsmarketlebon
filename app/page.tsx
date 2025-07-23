import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 bg-[#121212] min-h-screen text-white font-poppins">
      {/* Beatmaker du mois */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-8">
          Beatmaker du mois
        </h2>
        <div className="bg-gray-900 rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/images/beatmaker-du-mois.jpg"
            alt="Beatmaker du mois"
            width={300}
            height={300}
            className="rounded-lg object-cover"
            priority
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">DJ Awesome</h3>
            <p className="mb-4 text-gray-300">
              Découvrez les beats les plus chauds de DJ Awesome ce mois-ci,
              exclusifs et prêts à booster vos projets musicaux.
            </p>
            <Link
              href="/beatmakers/dj-awesome"
              className="inline-block bg-pink-500 hover:bg-pink-400 text-white px-5 py-2 rounded-md font-semibold transition"
            >
              Voir son profil
            </Link>
          </div>
        </div>
      </section>

      {/* Recherche IA */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-900 rounded-lg mb-12">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-8 text-center">
          Recherche IA
        </h2>
        <form className="max-w-xl mx-auto flex gap-3">
          <input
            type="search"
            placeholder="Cherchez votre beat idéal avec l'IA..."
            className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-400 px-6 py-3 rounded-md font-semibold transition"
          >
            Rechercher
          </button>
        </form>
      </section>

      {/* Pourquoi nous ? */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-8 text-center">
          Pourquoi choisir BeatsMarket ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Qualité Pro</h3>
            <p className="text-gray-300">
              Beats exclusifs, réalisés par des beatmakers passionnés et
              professionnels.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Recherche IA</h3>
            <p className="text-gray-300">
              Trouvez le beat parfait grâce à notre technologie de recherche
              assistée par intelligence artificielle.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Support & Sécurité</h3>
            <p className="text-gray-300">
              Une équipe disponible, un site sécurisé, et des paiements fiables.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
