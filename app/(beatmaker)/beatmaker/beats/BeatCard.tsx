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
    <div className="border rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800">
      {beat.coverUrl ? (
        <img
          src={beat.coverUrl}
          alt={`Cover de ${beat.title}`}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
          Pas d'image
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{beat.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Prix de base: {beat.price} €
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Licences: {beat.licenses.join(", ")}
        </p>

        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={() => alert(`Modifier ${beat.title}`)}>
            Modifier
          </Button>
          <Button variant="destructive" size="sm" onClick={() => alert(`Supprimer ${beat.title}`)}>
            Supprimer
          </Button>
        </div>

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Statut :{" "}
          <span
            className={`font-medium ${
              beat.status === "published"
                ? "text-green-600"
                : beat.status === "draft"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {beat.status.charAt(0).toUpperCase() + beat.status.slice(1)}
          </span>
        </p>
      </div>
    </div>
  );
}