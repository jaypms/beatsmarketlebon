"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BeatCard } from "@/components/BeatCard";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "published" | "draft" | "archived";
}

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Charger les beats via API (simulation)
    const initialBeats: Beat[] = [
      {
        id: "1",
        title: "Beat Funky Groove",
        price: 20,
        licenses: ["basique", "premium"],
        coverUrl: "/beats/beat1.jpg",
        status: "published",
      },
      {
        id: "2",
        title: "Trap Vibes",
        price: 15,
        licenses: ["basique"],
        coverUrl: "/beats/beat2.jpg",
        status: "draft",
      },
    ];
    setBeats(initialBeats);
  }, []);

  const filteredBeats = beats.filter((beat) =>
    beat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mes Beats</h1>
        <Button onClick={() => alert("Ouvrir modal création beat")}>
          Ajouter un Beat
        </Button>
      </div>

      <Input
        placeholder="Rechercher un beat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBeats.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Aucun beat trouvé.
          </p>
        )}

        {filteredBeats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} />
        ))}
      </div>
    </div>
  );
}