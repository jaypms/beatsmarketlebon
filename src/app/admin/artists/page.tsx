"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockArtists = [
  {
    id: "artist_001",
    name: "Léa Sound",
    email: "lea@example.com",
    beatsPurchased: 12,
    revenue: "124,90 €",
    status: "Actif",
  },
  {
    id: "artist_002",
    name: "Flowmatic",
    email: "flow@example.com",
    beatsPurchased: 4,
    revenue: "44,50 €",
    status: "Suspendu",
  },
];

export default function AdminArtistsPage() {
  const [artists, setArtists] = useState(mockArtists);

  const handleSuspend = (id: string) => {
    setArtists((prev) =>
      prev.map((artist) =>
        artist.id === id ? { ...artist, status: "Suspendu" } : artist
      )
    );
  };

  const handleActivate = (id: string) => {
    setArtists((prev) =>
      prev.map((artist) =>
        artist.id === id ? { ...artist, status: "Actif" } : artist
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Gestion des Artistes</h1>
        <Button variant="default">Ajouter un artiste</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Beats achetés</TableHead>
            <TableHead className="text-center">Revenus</TableHead>
            <TableHead className="text-center">Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist.id}>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.email}</TableCell>
              <TableCell className="text-center">{artist.beatsPurchased}</TableCell>
              <TableCell className="text-center">{artist.revenue}</TableCell>
              <TableCell className="text-center">
                <Badge variant={artist.status === "Actif" ? "success" : "destructive"}>
                  {artist.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => alert("Voir profil de " + artist.name)}>
                      Voir profil
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        artist.status === "Actif"
                          ? handleSuspend(artist.id)
                          : handleActivate(artist.id)
                      }
                    >
                      {artist.status === "Actif" ? "Suspendre" : "Réactiver"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => alert("Suppression de " + artist.name)}>
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
