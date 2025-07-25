import React from "react";
import { Button } from "./ui/button";

interface BeatCardProps {
  beat: {
    id: string;
    title: string;
    price: number;
    licenses: string[];
    status: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export const BeatCard: React.FC<BeatCardProps> = ({ beat, onEdit, onDelete }) => {
  const statusColor = {
    actif: "bg-green-500",
    suspendu: "bg-red-500",
    en_attente: "bg-yellow-500",
  }[beat.status] || "bg-gray-500";

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{beat.title}</h2>
        <span className={`text-white px-2 py-1 rounded ${statusColor}`}>
          {beat.status}
        </span>
      </div>
      <p>Prix : {beat.price} €</p>
      <p>Licences : {beat.licenses.join(", ")}</p>
      <div className="flex justify-end space-x-2 mt-4">
        <Button variant="outline" onClick={onEdit}>
          Modifier
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Supprimer
        </Button>
      </div>
    </div>
  );
};