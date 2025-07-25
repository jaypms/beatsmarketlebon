import React, { useState, useEffect } from "react";
import { BeatCard } from "@/components/BeatCard";
import { Button } from "@/components/ui";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  status: string;
}

const BeatmakerDashboard = () => {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // TODO: Fetch beats from API or local state
    const fetchBeats = async () => {
      // Placeholder data
      const data: Beat[] = [
        {
          id: "1",
          title: "Beat 1",
          price: 20,
          licenses: ["Basique MP3", "Premium WAV"],
          status: "active",
        },
        {
          id: "2",
          title: "Beat 2",
          price: 15,
          licenses: ["Basique MP3"],
          status: "inactive",
        },
      ];
      setBeats(data);
    };
    fetchBeats();
  }, []);

  const handleEdit = (id: string) => {
    // Open edit modal or navigate to edit page
  };

  const handleDelete = (id: string) => {
    // Open delete confirmation modal
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Beatmaker</h1>
      <Button className="mb-4">Ajouter un nouveau beat</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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