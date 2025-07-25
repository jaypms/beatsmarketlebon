import React, { useState, useEffect } from "react";
import { BeatCard } from "../../components/BeatCard";
import { Button } from "../../components/ui";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  status: string;
}

const BeatmakerDashboard: React.FC = () => {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // TODO: Charger les beats via API ou contexte
    setBeats([
      {
        id: "1",
        title: "Beat Hip Hop 1",
        price: 25,
        licenses: ["Basique", "Premium", "Exclusive"],
        status: "active",
      },
      {
        id: "2",
        title: "Beat Trap 2",
        price: 30,
        licenses: ["Basique", "Premium"],
        status: "inactive",
      },
    ]);
  }, []);

  const handleEdit = (id: string) => {
    // TODO: Ouvrir la modale de modification du beat
    alert(`Modifier le beat ${id}`);
  };

  const handleDelete = (id: string) => {
    // TODO: Confirmation et suppression du beat
    if (confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats((prev) => prev.filter((beat) => beat.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord Beatmaker</h1>
      <div className="mb-4">
        <Button onClick={() => alert("Ajouter un nouveau beat")}>
          Ajouter un Beat
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            beat={beat}
            onEdit={() => handleEdit(beat.id)}
            onDelete={() => handleDelete(beat.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BeatmakerDashboard;