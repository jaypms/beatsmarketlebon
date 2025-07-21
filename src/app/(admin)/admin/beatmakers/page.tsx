"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Beatmaker = {
  id: string
  name: string
  email: string
  status: "Actif" | "Inactif" | "Signalé" | "En attente"
}

const data: Beatmaker[] = [
  { id: "1", name: "DRKBeatz", email: "drk@beat.com", status: "Actif" },
  { id: "2", name: "LoopMasta", email: "loop@beat.com", status: "Signalé" },
  { id: "3", name: "808God", email: "god@trap.fr", status: "En attente" },
]

const statusColor = {
  Actif: "bg-green-600",
  Inactif: "bg-gray-500",
  Signalé: "bg-red-600",
  "En attente": "bg-yellow-500",
}

const columns: ColumnDef<Beatmaker>[] = [
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
      const status = row.getValue("status") as Beatmaker["status"]
      return <Badge className={statusColor[status]}>{status}</Badge>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const beatmaker = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(`Modifier ${beatmaker.name}`)}>
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Voir le profil de ${beatmaker.name}`)}>
              Voir le profil
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={() => alert(`Signaler ${beatmaker.name}`)}>
              <ShieldAlert className="mr-2 h-4 w-4" />
              Signaler
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function AdminBeatmakersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Beatmakers</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
