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
  status: string;
}

export const BeatsManagement: React.FC = () => {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch beats from API or local data
    const fetchBeats = async () => {
      // Remplacer par fetch réel
      const data: Beat[] = [
        {
          id: "1",
          title: "Beat 1",
          price: 15,
          licenses: ["Basique", "Premium"],
          status: "actif",
        },
        {
          id: "2",
          title: "Beat 2",
          price: 20,
          licenses: ["Exclusive"],
          status: "suspendu",
        },
      ];
      setBeats(data);
    };
    fetchBeats();
  }, []);

  function handleEdit(beat: Beat) {
    setSelectedBeat(beat);
    setIsModalOpen(true);
  }

  function handleDelete(beatId: string) {
    setBeats((prev) => prev.filter((b) => b.id !== beatId));
  }

  function handleAdd() {
    setSelectedBeat(null);
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleSave(beat: Beat) {
    if (selectedBeat) {
      setBeats((prev) =>
        prev.map((b) => (b.id === beat.id ? beat : b))
      );
    } else {
      setBeats((prev) => [...prev, { ...beat, id: Date.now().toString() }]);
    }
    setIsModalOpen(false);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestion des Beats</h1>
        <Button onClick={handleAdd}>Ajouter un Beat</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            beat={beat}
            onEdit={() => handleEdit(beat)}
            onDelete={() => handleDelete(beat.id)}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <BeatForm
          beat={selectedBeat}
          onSave={handleSave}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  );
};