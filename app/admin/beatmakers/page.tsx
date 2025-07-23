"use client";

import { useState, useEffect } from "react";

type BeatmakerStatus = "actif" | "en attente" | "banni";

interface Beatmaker {
  id: string;
  name: string;
  email: string;
  status: BeatmakerStatus;
  beatsCount: number;
  revenue: number;
}

const STATUS_CLASSES: Record<BeatmakerStatus, string> = {
  actif: "bg-green-600 text-white",
  "en attente": "bg-yellow-500 text-black",
  banni: "bg-red-600 text-white",
};

// Composant Badge simple
function StatusBadge({ status }: { status: BeatmakerStatus }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${STATUS_CLASSES[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}

// Composant modale simple pour confirmation
function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-sm w-full text-white">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-500"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminBeatmakersPage() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [beatmakerToDelete, setBeatmakerToDelete] = useState<string | null>(null);

  useEffect(() => {
    // Simuler fetch API
    setTimeout(() => {
      setBeatmakers([
        {
          id: "1",
          name: "Jay Jay",
          email: "jay@example.com",
          status: "actif",
          beatsCount: 12,
          revenue: 1200,
        },
        {
          id: "2",
          name: "Sophie",
          email: "sophie@example.com",
          status: "en attente",
          beatsCount: 5,
          revenue: 450,
        },
        {
          id: "3",
          name: "Marc",
          email: "marc@example.com",
          status: "banni",
          beatsCount: 0,
          revenue: 0,
        },
      ]);
      setLoading(false);
    }, 700);
  }, []);

  function openDeleteModal(id: string) {
    setBeatmakerToDelete(id);
    setModalOpen(true);
  }

  function confirmDelete() {
    if (!beatmakerToDelete) return;
    setBeatmakers((prev) => prev.filter((b) => b.id !== beatmakerToDelete));
    setModalOpen(false);
    setBeatmakerToDelete(null);
    // TODO: appeler backend suppression ici
  }

  function cancelDelete() {
    setModalOpen(false);
    setBeatmakerToDelete(null);
  }

  function handleEdit(id: string) {
    alert(`Éditer beatmaker ${id}`);
    // TODO: rediriger vers page édition
  }

  function handleBan(id: string) {
    alert(`Bannir beatmaker ${id}`);
    // TODO: appeler backend bannissement
  }

  if (loading) return <p className="p-6 text-white">Chargement des beatmakers...</p>;

  return (
    <section className="min-h-screen bg-[#121212] px-6 py-12 text-white font-poppins max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">Gestion des Beatmakers</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Beats en ligne</th>
              <th className="px-4 py-3">Revenu (€)</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {beatmakers.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-500">
                  Aucun beatmaker trouvé.
                </td>
              </tr>
            ) : (
              beatmakers.map((b) => (
                <tr
                  key={b.id}
                  className="border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.email}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="px-4 py-3">{b.beatsCount}</td>
                  <td className="px-4 py-3">{b.revenue.toFixed(2)}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      onClick={() => handleEdit(b.id)}
                      className="px-3 py-1 rounded bg-pink-600 hover:bg-pink-500 transition"
                    >
                      Éditer
                    </button>
                    <button
                      onClick={() => handleBan(b.id)}
                      className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-400 text-black transition"
                    >
                      Bannir
                    </button>
                    <button
                      onClick={() => openDeleteModal(b.id)}
                      className="px-3 py-1 rounded bg-red-600 hover:bg-red-500 transition"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <ConfirmModal
          message="Êtes-vous sûr de vouloir supprimer ce beatmaker ? Cette action est irréversible."
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </section>
  );
}
