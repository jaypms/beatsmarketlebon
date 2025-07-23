"use client";

import { useState, useEffect } from "react";

interface Beatmaker {
  id: string;
  name: string;
  photoUrl: string;
  description: string;
  followers: number;
}

export default function Home() {
  const [beatmakerOfTheMonth, setBeatmakerOfTheMonth] = useState<Beatmaker | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  useEffect(() => {
    // Simuler récupération Beatmaker du mois
    setBeatmakerOfTheMonth({
      id: "bm001",
      name: "DJ Flow",
      photoUrl: "/images/beatmakers/dj-flow.jpg",
      description: "Le beatmaker du mois, expert en trap et hip-hop.",
      followers: 12345,
    });
  }, []);

  const handleSearch = () => {
    // Simuler recherche IA (placeholder)
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }
    setSearchResult(`Résultat IA simulé pour : "${searchQuery}"`);
  };

  return (
    <main className="bg-[#121212] min-h-screen text-white font-poppins px-6 max-w-7xl mx-auto pt-20 space-y-16">
      {/* Beatmaker du mois */}
      <section className="bg-gray-900 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {beatmakerOfTheMonth && (
          <>
            <img
              src={beatmakerOfTheMonth.photoUrl}
              alt={`Photo de ${beatmakerOfTheMonth.name}`}
              className="w-48 h-48 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h2 className="text-3xl font-bold text-pink-500 mb-2">
                Beatmaker du mois
              </h2>
              <h3 className="text-2xl font-semibold">{beatmakerOfTheMonth.name}</h3>
              <p className="text-gray-300 my-2">{beatmakerOfTheMonth.description}</p>
              <p className="text-gray-400 text-sm">
                {beatmakerOfTheMonth.followers.toLocaleString()} followers
              </p>
            </div>
          </>
        )}
      </section>

      {/* Recherche IA */}
      <section className="bg-gray-900 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Recherche IA
        </h2>
        <input
          type="text"
          placeholder="Rechercher un beat, un style, un artiste..."
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="w-full bg-pink-600 hover:bg-pink-500 py-3 rounded-md font-semibold transition"
        >
          Lancer la recherche
        </button>
        {searchResult && (
          <p className="mt-4 text-gray-300 italic">{searchResult}</p>
        )}
      </section>

      {/* Pourquoi nous ? */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-pink-500">
          Pourquoi nous ?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          BeatsMarket est la plateforme numéro 1 pour acheter et vendre des beats
          dans le monde, grâce à une communauté active, des outils modernes et
          une expérience unique centrée sur l’innovation.
        </p>
      </section>
    </main>
  );
}
