import React from "react";
import { BeatCard } from "@/components/BeatCard";
import { Button } from "@/components/ui";

export default function BeatmakerDashboard() {
  // Exemple de données mock pour les beats
  const [beats, setBeats] = React.useState([
    {
      id: "1",
      title: "Beat énergique",
      price: 29.99,
      licenses: ["Basique MP3", "Premium WAV", "Exclusive"],
      status: "active" as const,
    },
    {
      id: "2",
      title: "Beat chill",
      price: 19.99,
      licenses: ["Basique MP3", "Premium WAV"],
      status: "inactive" as const,
    },
  ]);

  function handleEdit(id: string) {
    alert(`Modifier le beat avec ID: ${id}`);
    // Ici rediriger vers page d'édition ou ouvrir modal
  }

  function handleDelete(id: string) {
    if (confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats((prev) => prev.filter((b) => b.id !== id));
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Beatmaker</h1>
      <Button className="mb-6">Ajouter un nouveau beat</Button>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beats.map((beat) => (
          <BeatCard
            key={beat.id}
            beat={beat}
            onEdit={() => handleEdit(beat.id)}
            onDelete={() => handleDelete(beat.id)}
          />
        ))}
      </div>
    </main>
  );
}