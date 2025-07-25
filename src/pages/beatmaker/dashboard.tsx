import React from "react";
import { BeatCard } from "../../components/BeatCard";
import { Button } from "../../components/ui";

const mockBeats = [
  {
    id: "1",
    title: "Beat Chill",
    price: 30,
    licenses: ["Basique MP3", "Premium WAV"],
    status: "active",
  },
  {
    id: "2",
    title: "Beat Trap",
    price: 45,
    licenses: ["Exclusive"],
    status: "inactive",
  },
];

export default function BeatmakerDashboard() {
  const [beats, setBeats] = React.useState(mockBeats);

  const handleEdit = (id: string) => {
    // Implémenter la logique de modification
    alert(`Modifier beat ${id}`);
  };

  const handleDelete = (id: string) => {
    // Implémenter la logique de suppression
    if (confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats((prev) => prev.filter((beat) => beat.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mon Tableau de Bord Beatmaker</h1>
      <Button className="mb-6">Ajouter un nouveau beat</Button>
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
}