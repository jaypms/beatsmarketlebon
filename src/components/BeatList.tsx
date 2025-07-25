import React from "react";
import { BeatCard } from "./BeatCard";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  status: string;
}

interface BeatListProps {
  beats: Beat[];
  onEdit: (beat: Beat) => void;
  onDelete: (id: string) => void;
}

export const BeatList: React.FC<BeatListProps> = ({ beats, onEdit, onDelete }) => {
  if (beats.length === 0) {
    return <p className="text-center text-gray-500">Aucun beat disponible.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {beats.map((beat) => (
        <BeatCard
          key={beat.id}
          beat={beat}
          onEdit={() => onEdit(beat)}
          onDelete={() => onDelete(beat.id)}
        />
      ))}
    </div>
  );
};