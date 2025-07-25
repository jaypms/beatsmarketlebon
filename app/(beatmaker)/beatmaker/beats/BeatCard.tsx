"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "published" | "draft" | "archived";
}

interface BeatCardProps {
  beat: Beat;
}

export function BeatCard({ beat }: BeatCardProps) {
  const handleEdit = () => {
    alert(`Modifier l'instrumentale: ${beat.title}`);
  };

  const handleDelete = () => {
    alert(`Supprimer l'instrumentale: ${beat.title}`);
  };

  const statusColor = {
    published: "bg-green-200 text-green-800",
    draft: "bg-yellow-200 text-yellow-800",
    archived: "bg-gray-300 text-gray-600",
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      {beat.coverUrl && (
        <img
          src={beat.coverUrl}
          alt={`Cover de ${beat.title}`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{beat.title}</h2>
        <p className="mt-1 text-sm text-gray-600">Prix: {beat.price} €</p>
        <div className="mt-2 space-x-1">
          {beat.licenses.map((license) => (
            <Badge key={license} variant="secondary">
              {license}
            </Badge>
          ))}
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[beat.status]}`}
          >
            {beat.status.charAt(0).toUpperCase() + beat.status.slice(1)}
          </span>
          <div className="space-x-2">
            <Button size="sm" variant="outline" onClick={handleEdit}>
              Modifier
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={handleDelete}
            >
              Supprimer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}