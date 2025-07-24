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

interface Beatmaker {
  id: string
  name: string
  email: string
  status: "gratuit" | "bronze" | "or" | "diamant" | "suspendu"
}

const mockBeatmakers: Beatmaker[] = [
  {
    id: "1",
    name: "Beatmaker Alpha",
    email: "alpha@beats.com",
    status: "or",
  },
  {
    id: "2",
    name: "Beatmaker Bravo",
    email: "bravo@beats.com",
    status: "gratuit",
  },
  {
    id: "3",
    name: "Beatmaker Charlie",
    email: "charlie@beats.com",
    status: "suspendu",
  },
]

export function BeatmakersTable() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>(mockBeatmakers)

  const handleAction = (id: string, action: string) => {
    console.log(`Action "${action}" sur le beatmaker ${id}`)
    // À connecter plus tard avec l’API
  }

  const getStatusBadge = (status: Beatmaker["status"]) => {
    switch (status) {
      case "gratuit":
        return <Badge variant="secondary">Gratuit</Badge>
      case "bronze":
        return <Badge className="bg-yellow-600 text-white">Bronze</Badge>
      case "or":
        return <Badge className="bg-yellow-400 text-black">Or</Badge>
      case "diamant":
        return <Badge className="bg-cyan-400 text-black">Diamant</Badge>
      case "suspendu":
        return <Badge variant="destructive">Suspendu</Badge>
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
          {beatmakers.map((b) => (
            <TableRow key={b.id}>
              <TableCell>{b.name}</TableCell>
              <TableCell>{b.email}</TableCell>
              <TableCell>{getStatusBadge(b.status)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleAction(b.id, "voir")}>
                      Voir profil
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleAction(b.id, "changer_statut")}>
                      Changer statut
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleAction(b.id, "supprimer")}>
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
