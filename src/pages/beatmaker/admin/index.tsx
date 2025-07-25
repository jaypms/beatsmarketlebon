import React, { useState, useEffect } from "react";
import { BeatCard } from "../../../components/BeatCard";
import { Button } from "../../../components/ui/button";
import { Modal } from "../../../components/ui/modal";
import { BeatForm } from "../../../components/BeatForm";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "actif" | "suspendu";
}

export default function BeatmakerAdmin() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBeat, setEditingBeat] = useState<Beat | null>(null);

  useEffect(() => {
    // Charger les beats depuis une API ou localStorage ici
  }, []);

  const openAddModal = () => {
    setEditingBeat(null);
    setModalOpen(true);
  };

  const openEditModal = (beat: Beat) => {
    setEditingBeat(beat);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSaveBeat = (beat: Beat) => {
    setBeats((prev) => {
      const exists = prev.find((b) => b.id === beat.id);
      if (exists) {
        return prev.map((b) => (b.id === beat.id ? beat : b));
      } else {
        return [...prev, beat];
      }
    });
    closeModal();
  };

  const handleDeleteBeat = (id: string) => {
    setBeats((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Beats</h1>
      <Button onClick={openAddModal} className="mb-6">
        Ajouter un Beat
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            {...beat}
            onEdit={openEditModal}
            onDelete={handleDeleteBeat}
          />
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <BeatForm
          beat={editingBeat}
          onSave={handleSaveBeat}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}