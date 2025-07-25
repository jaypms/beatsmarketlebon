"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow bg-gray-800 text-white">
      <div className="relative w-full h-40 mb-4 rounded overflow-hidden bg-gray-700">
        {beat.coverUrl ? (
          <Image
            src={beat.coverUrl}
            alt={beat.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Pas de cover
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2">{beat.title}</h3>
      <p className="mb-2">Prix de base: {beat.price} €</p>
      <p className="mb-4">
        Licences: {beat.licenses.join(", ")}
      </p>
      <p className="mb-4">
        Statut:{" "}
        <span
          className={`font-semibold ${
            beat.status === "published"
              ? "text-green-400"
              : beat.status === "draft"
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {beat.status}
        </span>
      </p>
      <div className="flex justify-between">
        <Button size="sm" variant="outline">
          Modifier
        </Button>
        <Button size="sm" variant="destructive">
          Supprimer
        </Button>
      </div>
    </div>
  );
}