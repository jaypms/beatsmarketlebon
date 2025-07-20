import React, { useEffect, useState } from "react";

type Beatmaker = {
  id: string;
  pseudo: string;
  email: string;
  statut: "Actif" | "Suspendu" | "En attente";
};

export default function AdminBeatmakers() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>([]);

  useEffect(() => {
    // Simuler fetch des beatmakers
    setBeatmakers([
      { id: "1", pseudo: "BeatMaster", email: "beatmaster@example.com", statut: "Actif" },
      { id: "2", pseudo: "SoundKing", email: "soundking@example.com", statut: "En attente" },
      { id: "3", pseudo: "RhythmQueen", email: "rhythmqueen@example.com", statut: "Suspendu" },
    ]);
  }, []);

  const changeStatus = (id: string, newStatus: Beatmaker["statut"]) => {
    setBeatmakers((prev) =>
      prev.map((bm) => (bm.id === id ? { ...bm, statut: newStatus } : bm))
    );
  };

  const deleteBeatmaker = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce beatmaker ? Cette action est irréversible.")) {
      setBeatmakers((prev) => prev.filter((bm) => bm.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gestion des Beatmakers</h1>

      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border border-gray-700">Pseudo</th>
            <th className="p-3 border border-gray-700">Email</th>
            <th className="p-3 border border-gray-700">Statut</th>
            <th className="p-3 border border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beatmakers.map(({ id, pseudo, email, statut }) => (
            <tr key={id} className="hover:bg-gray-800">
              <td className="p-3 border border-gray-700">{pseudo}</td>
              <td className="p-3 border border-gray-700">{email}</td>
              <td className="p-3 border border-gray-700">
                <select
                  value={statut}
                  onChange={(e) => changeStatus(id, e.target.value as Beatmaker["statut"])}
                  className="bg-gray-700 text-gray-100 p-1 rounded"
                >
                  <option>Actif</option>
                  <option>Suspendu</option>
                  <option>En attente</option>
                </select>
              </td>
              <td className="p-3 border border-gray-700">
                <button
                  onClick={() => deleteBeatmaker(id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
