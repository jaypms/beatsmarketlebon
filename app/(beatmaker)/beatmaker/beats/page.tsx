"use client";

import React, { useState } from "react";
import { BeatCard } from "./BeatCard";
import { Button } from "@/components/ui/button";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "published" | "draft" | "archived";
}

const initialBeats: Beat[] = [
  {
    id: "1",
    title: "Beat Chill",
    price: 20,
    licenses: ["Basique MP3", "Premium WAV"],
    coverUrl: "/images/beats/beat-chill.jpg",
    status: "published",
  },
  {
    id: "2",
    title: "Trap Énergique",
    price: 25,
    licenses: ["Exclusive", "Exclusive + Stems"],
    coverUrl: "/images/beats/beat-trap.jpg",
    status: "draft",
  },
];

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>(initialBeats);

  const handleAddBeat = () => {
    alert("Ouvrir modal d'ajout d'instrumentale");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mes Instrumentales</h1>
        <Button onClick={handleAddBeat}>Ajouter une instrumentale</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} />
        ))}
      </div>
    </div>
  );
}