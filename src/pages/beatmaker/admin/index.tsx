import React, { useState, useEffect } from "react";
import { BeatCard } from "../../../components/BeatCard";
import { BeatForm } from "../../../components/BeatForm";
import { Button } from "../../../components/ui/button";

export default function AdminBeatmakerPage() {
  const [beats, setBeats] = useState<Array<any>>([]);
  const [editingBeat, setEditingBeat] = useState<any | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // TODO: fetch beats from API
    setBeats([
      {
        id: "1",
        title: "Beat 1",
        price: 29.99,
        licenses: ["Basique MP3", "Premium WAV"],
        status: "actif",
      },
      {
        id: "2",
        title: "Beat 2",
        price: 49.99,
        licenses: ["Exclusive"],
        status: "suspendu",
      },
    ]);
  }, []);

  const handleAddClick = () => {
    setEditingBeat(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (beat: any) => {
    setEditingBeat(beat);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats(beats.filter((b) => b.id !== id));
    }
  };

  const handleSave = (beat: any) => {
    if (editingBeat) {
      setBeats(beats.map((b) => (b.id === beat.id ? beat : b)));
    } else {
      setBeats([...beats, beat]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestion des Beats</h1>
      <Button onClick={handleAddClick} className="mb-4">
        Ajouter un beat
      </Button>

      {isFormOpen && (
        <BeatForm beat={editingBeat} onSave={handleSave} onCancel={handleCancel} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            beat={beat}
            onEdit={() => handleEditClick(beat)}
            onDelete={() => handleDeleteClick(beat.id)}
          />
        ))}
      </div>
    </div>
  );
}