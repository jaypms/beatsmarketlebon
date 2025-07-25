"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface BeatCardProps {
  beat: {
    id: string;
    title: string;
    price: number;
    licenses: string[];
    coverUrl?: string;
    status: "published" | "draft" | "archived";
  };
}

export function BeatCard({ beat }: BeatCardProps) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      {beat.coverUrl ? (
        <img
          src={beat.coverUrl}
          alt={`Cover for ${beat.title}`}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">
          Pas de cover
        </div>
      )}

      <h2 className="text-lg font-semibold mb-2">{beat.title}</h2>

      <p className="mb-1">
        Prix à partir de : <strong>{beat.price} €</strong>
      </p>

      <p className="mb-4 text-sm text-gray-600">
        Licences : {beat.licenses.join(", ")}
      </p>

      <div className="mt-auto flex space-x-2">
        <Button variant="outline" size="sm" onClick={() => alert(`Modifier ${beat.title}`)}>
          Modifier
        </Button>
        <Button variant="destructive" size="sm" onClick={() => alert(`Supprimer ${beat.title}`)}>
          Supprimer
        </Button>
      </div>

      {beat.status !== "published" && (
        <p className="mt-2 text-xs font-semibold text-yellow-600">
          Statut : {beat.status}
        </p>
      )}
    </div>
  );
}