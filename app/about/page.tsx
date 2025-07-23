import Image from "next/image";

export default function About() {
  return (
    <main className="pt-20 bg-[#121212] min-h-screen text-white font-poppins px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-8 text-center">
        À Propos de BeatsMarket
      </h1>

      <section className="mb-12 max-w-4xl mx-auto text-center text-gray-300 leading-relaxed">
        <p className="mb-4">
          BeatsMarket est la plateforme ultime dédiée aux beatmakers et artistes,
          proposant un espace sécurisé, innovant et facile d’accès pour vendre et
          acheter des beats exclusifs et non exclusifs.
        </p>
        <p className="mb-4">
          Notre mission est de connecter les talents du monde entier en utilisant
          les dernières technologies, y compris l’intelligence artificielle, pour
          offrir la meilleure expérience utilisateur possible.
        </p>
        <p>
          Que vous soyez un beatmaker cherchant à développer votre carrière ou un
          artiste à la recherche du son parfait, BeatsMarket est votre allié de
          confiance.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-900 p-6 rounded-lg">
          <Image
            src="/images/tools/boutique-pro.svg"
            alt="Boutique Pro"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Boutique Pro</h3>
          <p className="text-gray-400">
            Gérez votre boutique de beats avec des outils professionnels et
            intuitifs.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <Image
            src="/images/tools/mastering-ia.svg"
            alt="Mastering IA"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Mastering IA</h3>
          <p className="text-gray-400">
            Améliorez automatiquement la qualité sonore de vos beats grâce à
            notre mastering assisté par IA.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <Image
            src="/images/tools/cover-ia.svg"
            alt="Cover IA"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Cover IA</h3>
          <p className="text-gray-400">
            Créez des visuels d’album professionnels en quelques clics avec notre
            outil IA.
          </p>
        </div>
      </section>
    </main>
  );
}
