"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table"; // Supposons qu’on ait un composant Table
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import BeatForm from "@/components/BeatForm";

type Beat = {
  id: string;
  title: string;
  bpm: number;
  key: string;
  priceBasic: number;
  pricePremium: number;
  priceExclusive: number;
  status: "actif" | "suspendu" | "brouillon";
  createdAt: string;
};

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editBeat, setEditBeat] = useState<Beat | null>(null);

  useEffect(() => {
    // Charger les beats depuis l’API
    setBeats([
      {
        id: "1",
        title: "Beat Hip Hop",
        bpm: 90,
        key: "Am",
        priceBasic: 15,
        pricePremium: 30,
        priceExclusive: 150,
        status: "actif",
        createdAt: "2025-07-24",
      },
      // autres beats...
    ]);
  }, []);

  function openEditModal(beat: Beat) {
    setEditBeat(beat);
    setOpenForm(true);
  }

  function openAddModal() {
    setEditBeat(null);
    setOpenForm(true);
  }

  function deleteBeat(id: string) {
    if (confirm("Voulez-vous vraiment supprimer ce beat ?")) {
      setBeats((prev) => prev.filter((b) => b.id !== id));
      // Appeler API pour supprimer
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Beats</h1>
        <Button onClick={openAddModal}>Ajouter un beat</Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>BPM</th>
            <th>Ton</th>
            <th>Prix Basic (€)</th>
            <th>Prix Premium (€)</th>
            <th>Prix Exclusive (€)</th>
            <th>Status</th>
            <th>Créé le</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beats.map((beat) => (
            <tr key={beat.id}>
              <td>{beat.title}</td>
              <td>{beat.bpm}</td>
              <td>{beat.key}</td>
              <td>{beat.priceBasic.toFixed(2)}</td>
              <td>{beat.pricePremium.toFixed(2)}</td>
              <td>{beat.priceExclusive.toFixed(2)}</td>
              <td>
                <Badge
                  variant={
                    beat.status === "actif"
                      ? "success"
                      : beat.status === "suspendu"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {beat.status}
                </Badge>
              </td>
              <td>{beat.createdAt}</td>
              <td className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditModal(beat)}
                >
                  Modifier
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteBeat(beat.id)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogTrigger />
        <DialogContent>
          <BeatForm
            beat={editBeat}
            onClose={() => setOpenForm(false)}
            onSave={(updatedBeat) => {
              setBeats((prev) => {
                if (editBeat) {
                  return prev.map((b) =>
                    b.id === updatedBeat.id ? updatedBeat : b
                  );
                }
                return [...prev, updatedBeat];
              });
              setOpenForm(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}