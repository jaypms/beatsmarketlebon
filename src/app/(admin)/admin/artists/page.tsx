"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Artist = {
  id: string
  name: string
  email: string
  status: "Actif" | "Inactif" | "En attente" | "Supprimé"
}

const data: Artist[] = [
  { id: "1", name: "Luna Rossa", email: "luna@music.fr", status: "Actif" },
  { id: "2", name: "Xario", email: "xario@trap.com", status: "En attente" },
  { id: "3", name: "Nova", email: "nova@rnb.com", status: "Inactif" },
]

const statusColor = {
  Actif: "bg-green-600",
  Inactif: "bg-gray-500",
  "En attente": "bg-yellow-500",
  Supprimé: "bg-red-600",
}

const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as Artist["status"]
      return <Badge className={statusColor[status]}>{status}</Badge>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const artist = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(`Modifier ${artist.name}`)}>
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Voir le profil de ${artist.name}`)}>
              Voir le profil
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={() => alert(`Supprimer ${artist.name}`)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function AdminArtistsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Artistes</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
