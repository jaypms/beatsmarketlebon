import React, { useState } from "react";
import ActionsMenu from "../../components/ActionsMenu";
import Modal from "../../components/Modal";
import UserForm from "../../components/UserForm";

type Status = "actif" | "suspendu" | "en attente";

type Beatmaker = {
  id: number;
  name: string;
  email: string;
  status: Status;
  genre?: string;
};

const initialBeatmakers: Beatmaker[] = [
  { id: 1, name: "Jean Beat", email: "jean@example.com", status: "actif", genre: "Hip-Hop" },
  { id: 2, name: "Lina Sound", email: "lina@example.com", status: "en attente", genre: "Trap" },
  { id: 3, name: "Mike Prod", email: "mike@example.com", status: "suspendu", genre: "Pop" },
];

const statusColors: Record<Status, string> = {
  actif: "bg-green-500",
  suspendu: "bg-red-500",
  en attente: "bg-yellow-400",
};

const statusOptions: Status[] = ["actif", "suspendu", "en attente"];

export default function AdminBeatmakers() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>(initialBeatmakers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedBeatmaker, setSelectedBeatmaker] = useState<Beatmaker | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  function openAddModal() {
    setSelectedBeatmaker(null);
    setModalMode("add");
    setIsModalOpen(true);
  }

  function openEditModal(beatmaker: Beatmaker) {
    setSelectedBeatmaker(beatmaker);
    setModalMode("edit");
    setIsModalOpen(true);
  }

  function openDeleteModal(beatmaker: Beatmaker) {
    setSelectedBeatmaker(beatmaker);
    setModalMode("delete");
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedBeatmaker(null);
  }

  function handleDeleteConfirm() {
    if (selectedBeatmaker) {
      setBeatmakers((prev) => prev.filter((b) => b.id !== selectedBeatmaker.id));
      closeModal();
    }
  }

  function handleFormSubmit(data: Omit<Beatmaker, "id">) {
    if (modalMode === "add") {
      const newBeatmaker: Beatmaker = {
        id: Math.max(0, ...beatmakers.map((b) => b.id)) + 1,
        ...data,
      };
      setBeatmakers((prev) => [...prev, newBeatmaker]);
    } else if (modalMode === "edit" && selectedBeatmaker) {
      setBeatmakers((prev) =>
        prev.map((b) => (b.id === selectedBeatmaker.id ? { ...b, ...data } : b))
      );
    }
    closeModal();
  }

  // Bascule entre "actif" et "suspendu"
  function toggleStatus(beatmaker: Beatmaker) {
    setBeatmakers((prev) =>
      prev.map((b) =>
        b.id === beatmaker.id
          ? { ...b, status: b.status === "actif" ? "suspendu" : "actif" }
          : b
      )
    );
  }

  const filteredBeatmakers = beatmakers.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? b.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-7xl mx-auto font-['PT_Sans', 'Poppins']">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Gestion des beatmakers</h1>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded font-semibold transition-colors"
          type="button"
          onClick={openAddModal}
        >
          + Ajouter un beatmaker
        </button>
      </header>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher beatmaker..."
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
              <th className="text-left py-3 px-4">Genre</th>
              <th className="text-left py-3 px-4">Statut</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBeatmakers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">
                  Aucun beatmaker trouvé.
                </td>
              </tr>
            ) : (
              filteredBeatmakers.map((beatmaker) => (
                <tr
                  key={beatmaker.id}
                  className="border-b border-gray-700 hover:bg-[#34343B] transition-colors"
                >
                  <td className="py-3 px-4">{beatmaker.name}</td>
                  <td className="py-3 px-4">{beatmaker.email}</td>
                  <td className="py-3 px-4">{beatmaker.genre || "-"}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        {
                          actif: "bg-green-500",
                          suspendu: "bg-red-500",
                          "en attente": "bg-yellow-400",
                        }[beatmaker.status]
                      }`}
                    >
                      {beatmaker.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <ActionsMenu
                      actions={[
                        {
                          label: "Modifier",
                          onClick: () => openEditModal(beatmaker),
                        },
                        {
                          label:
                            beatmaker.status === "actif"
                              ? "Suspendre"
                              : "Activer",
                          onClick: () => toggleStatus(beatmaker),
                        },
                        {
                          label: "Supprimer",
                          onClick: () => openDeleteModal(beatmaker),
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
            ? "Ajouter un beatmaker"
            : modalMode === "edit"
            ? "Modifier un beatmaker"
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
            Êtes-vous sûr de vouloir supprimer le beatmaker{" "}
            <strong>{selectedBeatmaker?.name}</strong> ? Cette action est irréversible.
          </p>
        ) : (
          <UserForm
            initialData={
              modalMode === "edit"
                ? {
                    name: selectedBeatmaker?.name || "",
                    email: selectedBeatmaker?.email || "",
                    status: selectedBeatmaker?.status || "en attente",
                    genre: selectedBeatmaker?.genre || "",
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