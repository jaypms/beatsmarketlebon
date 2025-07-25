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

export default function BeatmakerBeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([
    {
      id: "1",
      title: "Beat Hip Hop Chill",
      price: 15,
      licenses: ["Basique", "Premium", "Exclusive"],
      coverUrl: "/images/beats/hiphop-chill.jpg",
      status: "published",
    },
    {
      id: "2",
      title: "Trap Energy",
      price: 20,
      licenses: ["Basique", "Premium"],
      status: "draft",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes Beats</h1>
        <Button onClick={() => alert("Ajouter un nouveau beat")}>Ajouter un beat</Button>
      </div>

      {beats.length === 0 ? (
        <p>Vous n'avez pas encore ajouté de beats.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beats.map((beat) => (
            <BeatCard key={beat.id} beat={beat} />
          ))}
        </div>
      )}
    </div>
  );
}