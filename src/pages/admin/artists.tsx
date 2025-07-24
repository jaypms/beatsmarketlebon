import React, { useState } from "react";
import ActionsMenu from "../../components/ActionsMenu";
import Modal from "../../components/Modal";
import UserForm from "../../components/UserForm";

type Status = "actif" | "suspendu" | "en attente";

type Artist = {
  id: number;
  name: string;
  email: string;
  status: Status;
};

const initialArtists: Artist[] = [
  { id: 1, name: "Alice Dupont", email: "alice@example.com", status: "actif" },
  { id: 2, name: "Bob Martin", email: "bob@example.com", status: "en attente" },
  { id: 3, name: "Carla Ruiz", email: "carla@example.com", status: "suspendu" },
];

const statusColors: Record<Status, string> = {
  actif: "bg-green-500",
  suspendu: "bg-red-500",
  en attente: "bg-yellow-400",
};

const statusOptions: Status[] = ["actif", "suspendu", "en attente"];

export default function AdminArtists() {
  const [artists, setArtists] = useState<Artist[]>(initialArtists);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  function openAddModal() {
    setSelectedArtist(null);
    setModalMode("add");
    setIsModalOpen(true);
  }

  function openEditModal(artist: Artist) {
    setSelectedArtist(artist);
    setModalMode("edit");
    setIsModalOpen(true);
  }

  function openDeleteModal(artist: Artist) {
    setSelectedArtist(artist);
    setModalMode("delete");
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedArtist(null);
  }

  function handleDeleteConfirm() {
    if (selectedArtist) {
      setArtists((prev) => prev.filter((a) => a.id !== selectedArtist.id));
      closeModal();
    }
  }

  function handleFormSubmit(data: Omit<Artist, "id">) {
    if (modalMode === "add") {
      const newArtist: Artist = {
        id: Math.max(0, ...artists.map((a) => a.id)) + 1,
        ...data,
      };
      setArtists((prev) => [...prev, newArtist]);
    } else if (modalMode === "edit" && selectedArtist) {
      setArtists((prev) =>
        prev.map((a) => (a.id === selectedArtist.id ? { ...a, ...data } : a))
      );
    }
    closeModal();
  }

  function toggleStatus(artist: Artist) {
    setArtists((prev) =>
      prev.map((a) =>
        a.id === artist.id
          ? { ...a, status: a.status === "actif" ? "suspendu" : "actif" }
          : a
      )
    );
  }

  const filteredArtists = artists.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? a.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-7xl mx-auto font-['PT_Sans', 'Poppins']">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Gestion des artistes</h1>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded font-semibold transition-colors"
          type="button"
          onClick={openAddModal}
        >
          + Ajouter un artiste
        </button>
      </header>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher artiste..."
          className="px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 text-white focus:border-pink-500 flex-grow min-w-[200px]"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 text-white focus:border-pink-500"
        >
          <option value="">Tous statuts</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

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
            {filteredArtists.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-400">
                  Aucun artiste trouvé.
                </td>
              </tr>
            ) : (
              filteredArtists.map((artist) => (
                <tr
                  key={artist.id}
                  className="border-b border-gray-700 hover:bg-[#34343B] transition-colors"
                >
                  <td className="py-3 px-4">{artist.name}</td>
                  <td className="py-3 px-4">{artist.email}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[artist.status]}`}
                    >
                      {artist.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <ActionsMenu
                      actions={[
                        {
                          label: "Modifier",
                          onClick: () => openEditModal(artist),
                        },
                        {
                          label:
                            artist.status === "actif" ? "Suspendre" : "Activer",
                          onClick: () => toggleStatus(artist),
                        },
                        {
                          label: "Supprimer",
                          onClick: () => openDeleteModal(artist),
                          color: "text-red-500",
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          modalMode === "add"
            ? "Ajouter un artiste"
            : modalMode === "edit"
            ? "Modifier un artiste"
            : "Confirmation de suppression"
        }
        footer={
          modalMode === "delete" ? (
            <>
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                Supprimer
              </button>
            </>
          ) : null
        }
      >
        {modalMode === "delete" ? (
          <p>
            Êtes-vous sûr de vouloir supprimer l’artiste{" "}
            <strong>{selectedArtist?.name}</strong> ? Cette action est irréversible.
          </p>
        ) : (
          <UserForm
            initialData={
              modalMode === "edit"
                ? {
                    name: selectedArtist?.name || "",
                    email: selectedArtist?.email || "",
                    status: selectedArtist?.status || "en attente",
                  }
                : undefined
            }
            onCancel={closeModal}
            onSubmit={handleFormSubmit}
            submitLabel={modalMode === "edit" ? "Modifier" : "Ajouter"}
          />
        )}
      </Modal>
    </main>
  );
}