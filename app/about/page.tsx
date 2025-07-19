import React from "react"

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-darkbg text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-6">À propos</h1>

      <p className="text-lg max-w-3xl mb-6">
        BeatsMarket est une plateforme internationale conçue pour connecter les beatmakers,
        artistes et producteurs du monde entier. Nous croyons que chaque créateur mérite
        des outils puissants pour vendre, distribuer et faire connaître sa musique.
      </p>

      <p className="text-lg max-w-3xl mb-6 text-gray-300">
        Grâce à notre technologie moderne, nos services IA, et notre interface intuitive,
        nous offrons une expérience unique, que vous soyez un artiste à la recherche du beat parfait
        ou un beatmaker souhaitant monétiser ses créations.
      </p>

      <p className="text-lg max-w-3xl text-gray-400">
        BeatsMarket est 100% indépendant et engagé pour une rémunération équitable des créateurs.
      </p>
    </section>
  )
}
