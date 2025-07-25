import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface BeatCardProps {
  id: string;
  title: string;
  price: number;
  licenses: string[];
  coverUrl?: string;
  status: "actif" | "suspendu";
  onEdit: (beat: { id: string; title: string; price: number; licenses: string[]; coverUrl?: string; status: "actif" | "suspendu" }) => void;
  onDelete: (id: string) => void;
}

export function BeatCard({
  id,
  title,
  price,
  licenses,
  coverUrl,
  status,
  onEdit,
  onDelete,
}: BeatCardProps) {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white dark:bg-gray-800">
      <img
        src={coverUrl || "/images/default-beat-cover.jpg"}
        alt={`Cover de ${title}`}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-2">Prix : {price} €</p>
      <div className="mb-2">
        {licenses.map((lic) => (
          <Badge key={lic} variant="secondary" className="mr-2">
            {lic}
          </Badge>
        ))}
      </div>
      <Badge
        variant={status === "actif" ? "success" : "destructive"}
        className="mb-3"
      >
        {status === "actif" ? "Actif" : "Suspendu"}
      </Badge>
      <div className="flex justify-between">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            onEdit({ id, title, price, licenses, coverUrl, status })
          }
        >
          Modifier
        </Button>
        <Button size="sm" variant="destructive" onClick={() => onDelete(id)}>
          Supprimer
        </Button>
      </div>
    </div>
  );
}