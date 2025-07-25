import React from "react";
import { Button } from "./ui";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  status: "active" | "inactive";
}

interface BeatCardProps {
  beat: Beat;
  onEdit: () => void;
  onDelete: () => void;
}

export const BeatCard: React.FC<BeatCardProps> = ({ beat, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{beat.title}</h2>
      <p className="mb-2">Prix : {beat.price.toFixed(2)} €</p>
      <p className="mb-2">
        Licences : {beat.licenses.join(", ")}
      </p>
      <p
        className={`mb-4 font-semibold ${
          beat.status === "active" ? "text-green-600" : "text-red-600"
        }`}
      >
        Statut : {beat.status === "active" ? "Actif" : "Inactif"}
      </p>
      <div className="flex space-x-2">
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