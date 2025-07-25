import React from "react";
import { Badge } from "@/components/ui/badge";
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
    <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={beat.coverUrl || "/images/default-beat-cover.jpg"}
        alt={`Cover de ${beat.title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2">{beat.title}</h2>
        <p className="mb-2 text-sm text-gray-600">
          Prix à partir de <strong>{beat.price}€</strong>
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {beat.licenses.map((lic) => (
            <Badge key={lic} variant="outline">
              {lic}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex space-x-2">
          <Button variant="outline" size="sm">
            Modifier
          </Button>
          <Button variant="destructive" size="sm">
            Supprimer
          </Button>
          <Button size="sm">
            {beat.status === "published" ? "Dépublier" : "Publier"}
          </Button>
        </div>
      </div>
    </div>
  );
}