"use client";

import React, { useState, useEffect } from "react";
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

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching beats for the beatmaker
  useEffect(() => {
    setLoading(true);
    // Simulated API call
    setTimeout(() => {
      setBeats([
        {
          id: "1",
          title: "Beat Trap Hardcore",
          price: 25,
          licenses: ["Basique MP3", "Premium WAV"],
          coverUrl: "/images/beat1.jpg",
          status: "published",
        },
        {
          id: "2",
          title: "Beat Chill LoFi",
          price: 15,
          licenses: ["Basique MP3"],
          coverUrl: "/images/beat2.jpg",
          status: "draft",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddBeat = () => {
    alert("Fonctionnalité Ajouter Beat non encore implémentée");
  };

  if (loading) return <p>Chargement des instrumentales...</p>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mes instrumentales</h1>
        <Button onClick={handleAddBeat}>Ajouter une instrumentale</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beats.length === 0 ? (
          <p>Vous n'avez pas encore d'instrumentale.</p>
        ) : (
          beats.map((beat) => <BeatCard key={beat.id} beat={beat} />)
        )}
      </div>
    </div>
  );
}