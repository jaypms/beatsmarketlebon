"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreVertical } from "lucide-react"
import { format } from "date-fns"

interface Beat {
  id: string
  title: string
  status: "en ligne" | "brouillon" | "supprimé"
  price: number
  created_at: string
}

interface BeatTableProps {
  beats: Beat[]
}

export default function BeatTable({ beats }: BeatTableProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Prix (€)</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {beats.map((beat) => (
            <TableRow key={beat.id}>
              <TableCell>{beat.title}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    beat.status === "en ligne"
                      ? "success"
                      : beat.status === "brouillon"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {beat.status}
                </Badge>
              </TableCell>
              <TableCell>{beat.price.toFixed(2)}</TableCell>
              <TableCell>{format(new Date(beat.created_at), "dd/MM/yyyy")}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" onClick={() => setSelectedId(beat.id)}>
                  <MoreVertical className="h-4 w-4" />
                </Button>
                {/* Tu peux ajouter ici un menu déroulant d’actions */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
