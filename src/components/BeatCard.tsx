import React from "react";
import { Badge, Button } from "@/components/ui";

interface Beat {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  status: string;
}

interface BeatCardProps {
  beat: Beat;
  onEdit: () => void;
  onDelete: () => void;
}

export const BeatCard: React.FC<BeatCardProps> = ({ beat, onEdit, onDelete }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2">{beat.title}</h3>
      <p className="mb-2">Prix : {beat.price} €</p>
      <div className="mb-2 flex flex-wrap gap-2">
        {beat.licenses.map((license) => (
          <Badge key={license} variant="secondary">
            {license}
          </Badge>
        ))}
      </div>
      <div className="flex justify-end gap-2">
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