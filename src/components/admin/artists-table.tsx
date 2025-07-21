"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Artist {
  id: string
  name: string
  email: string
  status: "actif" | "suspendu" | "en_attente"
}

const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Artiste Alpha",
    email: "alpha@email.com",
    status: "actif",
  },
  {
    id: "2",
    name: "Artiste Bravo",
    email: "bravo@email.com",
    status: "suspendu",
  },
  {
    id: "3",
    name: "Artiste Charlie",
    email: "charlie@email.com",
    status: "en_attente",
  },
]

export function ArtistsTable() {
  const [artists, setArtists] = useState<Artist[]>(mockArtists)

  const handleAction = (id: string, action: string) => {
    console.log(`Action "${action}" sur l'artiste ${id}`)
    // Ici, tu pourras intégrer des appels API ou des modales
  }

  const getStatusBadge = (status: Artist["status"]) => {
    switch (status) {
      case "actif":
        return <Badge variant="success">Actif</Badge>
      case "suspendu":
        return <Badge variant="destructive">Suspendu</Badge>
      case "en_attente":
        return <Badge variant="secondary">En attente</Badge>
    }
  }

  return (
    <div className="rounded-xl border bg-muted p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist.id}>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.email}</TableCell>
              <TableCell>{getStatusBadge(artist.status)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleAction(artist.id, "voir")}>
                      Voir profil
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleAction(artist.id, "suspendre")}>
                      Suspendre
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleAction(artist.id, "supprimer")}>
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
  )
}
