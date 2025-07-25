import { useState, useEffect } from "react";

interface Beat {
  id: string;
  title: string;
  status: "active" | "inactive";
  licenses: {
    basic: boolean;
    premium: boolean;
    exclusive: boolean;
    stems: boolean;
  };
  priceByLicense: {
    basic: number;
    premium: number;
    exclusive: number;
    stems: number;
  };
}

export default function AdminBeatmakerBeats() {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // TODO: fetch beats from API
  }, []);

  const toggleStatus = (id: string) => {
    setBeats((prev) =>
      prev.map((beat) =>
        beat.id === id
          ? { ...beat, status: beat.status === "active" ? "inactive" : "active" }
          : beat
      )
    );
  };

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Gestion des Beats</h1>
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Titre</th>
            <th className="border border-gray-300 p-2">Statut</th>
            <th className="border border-gray-300 p-2">Licences</th>
            <th className="border border-gray-300 p-2">Prix (€/licence)</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beats.map((beat) => (
            <tr key={beat.id}>
              <td className="border border-gray-300 p-2">{beat.title}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className={`px-2 py-1 rounded ${
                    beat.status === "active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                  onClick={() => toggleStatus(beat.id)}
                >
                  {beat.status === "active" ? "Actif" : "Inactif"}
                </button>
              </td>
              <td className="border border-gray-300 p-2">
                {beat.licenses.basic && "Basique "}
                {beat.licenses.premium && "Premium "}
                {beat.licenses.exclusive && "Exclusive "}
                {beat.licenses.stems && "Stems"}
              </td>
              <td className="border border-gray-300 p-2">
                {beat.licenses.basic && `${beat.priceByLicense.basic}€ `}
                {beat.licenses.premium && `${beat.priceByLicense.premium}€ `}
                {beat.licenses.exclusive && `${beat.priceByLicense.exclusive}€ `}
                {beat.licenses.stems && `${beat.priceByLicense.stems}€`}
              </td>
              <td className="border border-gray-300 p-2">
                {/* TODO: Edit/Delete actions */}
                <button className="btn-secondary mr-2">Modifier</button>
                <button className="btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
          {beats.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center p-4">
                Aucun beat disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn-primary mt-6">Ajouter un nouveau Beat</button>
    </main>
  );
}