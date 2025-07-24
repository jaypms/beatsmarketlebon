import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import Modal from "../../components/Modal";

type Artist = {
  id: number;
  name: string;
  email: string;
  status: "actif" | "suspendu" | "en attente";
};

const initialArtists: Artist[] = [
  { id: 1, name: "Alice Dupont", email: "alice@example.com", status: "actif" },
  { id: 2, name: "Bob Martin", email: "bob@example.com", status: "en attente" },
  { id: 3, name: "Carla Ruiz", email: "carla@example.com", status: "suspendu" },
];

const statusColors: Record<Artist["status"], string> = {
  actif: "bg-green-500",
  suspendu: "bg-red-500",
  en attente: "bg-yellow-400",
};

export default function AdminArtists() {
  const [artists, setArtists] = useState<Artist[]>(initialArtists);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artistToDelete, setArtistToDelete] = useState<Artist | null>(null);

  function openDeleteModal(artist: Artist) {
    setArtistToDelete(artist);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setArtistToDelete(null);
  }

  function confirmDelete() {
    if (artistToDelete) {
      setArtists((prev) => prev.filter((a) => a.id !== artistToDelete.id));
      closeModal();
    }
  }

  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-7xl mx-auto font-['PT_Sans', 'Poppins']">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion des artistes</h1>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded font-semibold transition-colors"
          type="button"
        >
          + Ajouter un artiste
        </button>
      </header>

      <section className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-3 px-4">Nom</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Statut</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map(({ id, name, email, status }) => (
              <tr
                key={id}
                className="border-b border-gray-700 hover:bg-[#34343B] transition-colors"
              >
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{email}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}
                  >
                    {status}
                  </span>
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    className="p-2 rounded hover:bg-[#3B3B42] transition-colors"
                    aria-label="Actions"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => openDeleteModal({ id, name, email, status })}
                    className="p-2 rounded hover:bg-red-700 text-red-500 transition-colors"
                    aria-label={`Supprimer ${name}`}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Confirmation de suppression"
        footer={
          <>
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Supprimer
            </button>
          </>
        }
      >
        <p>
          Êtes-vous sûr de vouloir supprimer l’artiste{" "}
          <strong>{artistToDelete?.name}</strong> ? Cette action est irréversible.
        </p>
      </Modal>
    </main>
  );
}