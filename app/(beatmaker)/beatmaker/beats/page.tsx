"use client";

import React, { useState, useEffect } from "react";
import { BeatCard } from "./BeatCard";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

  useEffect(() => {
    // TODO: Fetch beats from API
    // Simulated fetch
    setTimeout(() => {
      setBeats([
        {
          id: "1",
          title: "Beat puissant",
          price: 15,
          licenses: ["Basique MP3", "Premium WAV"],
          coverUrl: "/images/sample-beat1.jpg",
          status: "published",
        },
        {
          id: "2",
          title: "Beat chill",
          price: 20,
          licenses: ["Basique MP3", "Exclusive"],
          coverUrl: "/images/sample-beat2.jpg",
          status: "draft",
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const openEditModal = (beat: Beat) => {
    setSelectedBeat(beat);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBeat(null);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes Beats</h1>
        <Button onClick={() => openEditModal(null)}>Ajouter un Beat</Button>
      </div>
      {loading ? (
        <p>Chargement...</p>
      ) : beats.length === 0 ? (
        <p>Vous n'avez aucun beat pour l'instant.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {beats.map((beat) => (
            <BeatCard key={beat.id} beat={beat} />
          ))}
        </div>
      )}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {/* Formulaire édition ou ajout de beat ici */}
        <div>Formulaire Beat (à implémenter)</div>
      </Modal>
    </div>
  );
}