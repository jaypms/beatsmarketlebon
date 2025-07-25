import React from "react";
import { Button } from "@/components/ui/button";

interface BeatCardProps {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "actif" | "suspendu";
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BeatCard: React.FC<BeatCardProps> = ({
  id,
  title,
  price,
  licenses,
  coverUrl,
  status,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={`beat-card p-4 border rounded-md shadow-md ${status === "suspendu" ? "opacity-50" : ""}`}>
      <img
        src={coverUrl || "/images/default-cover.jpg"}
        alt={`Cover du beat ${title}`}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">Prix : {price} €</p>
      <p className="text-sm text-gray-600">
        Licences : {licenses.join(", ")}
      </p>
      <div className="mt-3 flex justify-between">
        <Button variant="outline" onClick={() => onEdit(id)}>
          Modifier
        </Button>
        <Button variant="destructive" onClick={() => onDelete(id)}>
          Supprimer
        </Button>
      </div>
    </div>
  );
};