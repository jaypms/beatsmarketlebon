import React, { useState, useEffect } from "react";
import { BeatCard } from "@/components/BeatCard";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "actif" | "suspendu";
}

export default function Beats() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    // Charger les beats depuis une API ou local
    setBeats([
      {
        id: "1",
        title: "Beat 1",
        price: 20,
        licenses: ["Basique", "Premium"],
        coverUrl: "/images/beat1.jpg",
        status: "actif",
      },
      {
        id: "2",
        title: "Beat 2",
        price: 15,
        licenses: ["Basique"],
        coverUrl: "/images/beat2.jpg",
        status: "suspendu",
      },
    ]);
  }, []);

  function openEditModal(beat: Beat) {
    setSelectedBeat(beat);
    setEditModalOpen(true);
  }

  function closeEditModal() {
    setSelectedBeat(null);
    setEditModalOpen(false);
  }

  function handleDelete(id: string) {
    if (confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats((prev) => prev.filter((beat) => beat.id !== id));
    }
  }

  return (
    <div className="beats-page p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Beats</h1>
      <Button className="mb-4">Ajouter un nouveau beat</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            id={beat.id}
            title={beat.title}
            price={beat.price}
            licenses={beat.licenses}
            coverUrl={beat.coverUrl}
            status={beat.status}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal open={isEditModalOpen} onClose={closeEditModal}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Modifier le beat: {selectedBeat?.title}
          </h2>
          {/* Formulaire d'édition du beat ici */}
        </div>
      </Modal>
    </div>
  );
}