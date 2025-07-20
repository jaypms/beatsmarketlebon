import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Beat = {
  id: string;
  title: string;
  statut: "Publié" | "En attente" | "Refusé";
  misesEnAvant: number;
  ventes: number;
};

type BeatmakerDetail = {
  id: string;
  pseudo: string;
  email: string;
  abonnement: string;
  servicesIA: {
    mastering: boolean;
    cover: boolean;
  };
  stats: {
    vues: number;
    ventesTotales: number;
    gains: number;
  };
  beats: Beat[];
};

export default function BeatmakerDetailAdmin() {
  const router = useRouter();
  const { id } = router.query;

  const [beatmaker, setBeatmaker] = useState<BeatmakerDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    // Simuler fetch données beatmaker
    setBeatmaker({
      id: id as string,
      pseudo: "BeatMaster",
      email: "beatmaster@example.com",
      abonnement: "Or",
      servicesIA: { mastering: true, cover: false },
      stats: { vues: 12000, ventesTotales: 320, gains: 4500 },
      beats: [
        { id: "b1", title: "Flow Supreme", statut: "Publié", misesEnAvant: 3, ventes: 25 },
        { id: "b2", title: "Chill Vibes", statut: "En attente", misesEnAvant: 0, ventes: 0 },
      ],
    });
  }, [id]);

  if (!beatmaker) return <div>Chargement...</div>;

  const toggleService = (service: "mastering" | "cover") => {
    setBeatmaker((prev) =>
      prev
        ? {
            ...prev,
            servicesIA: {
              ...prev.servicesIA,
              [service]: !prev.servicesIA[service],
            },
          }
        : null
    );
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Détail Beatmaker : {beatmaker.pseudo}</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Infos générales</h2>
        <p>Email : {beatmaker.email}</p>
        <p>Abonnement : {beatmaker.abonnement}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Services IA</h2>
        <label className="inline-flex items-center mr-6">
          <input
            type="checkbox"
            checked={beatmaker.servicesIA.mastering}
            onChange={() => toggleService("mastering")}
            className="mr-2"
          />
          Mastering IA
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={beatmaker.servicesIA.cover}
            onChange={() => toggleService("cover")}
            className="mr-2"
          />
          Cover IA
        </label>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
        <p>Vues : {beatmaker.stats.vues}</p>
        <p>Ventes totales : {beatmaker.stats.ventesTotales}</p>
        <p>Gains : {beatmaker.stats.gains} €</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Beats</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border border-gray-700">Titre</th>
              <th className="p-3 border border-gray-700">Statut</th>
              <th className="p-3 border border-gray-700">Mises en avant</th>
              <th className="p-3 border border-gray-700">Ventes</th>
            </tr>
          </thead>
          <tbody>
            {beatmaker.beats.map(({ id, title, statut, misesEnAvant, ventes }) => (
              <tr key={id} className="hover:bg-gray-800">
                <td className="p-3 border border-gray-700">{title}</td>
                <td className="p-3 border border-gray-700">{statut}</td>
                <td className="p-3 border border-gray-700">{misesEnAvant}</td>
                <td className="p-3 border border-gray-700">{ventes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
