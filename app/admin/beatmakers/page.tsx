"use client"

import { useEffect, useState } from "react"
import { StatusBadge } from "@/components/ui/status-badge"
import { ActionMenu } from "@/components/ui/action-menu"

type Beatmaker = {
  id: string
  nom: string
  email: string
  abonnements: string[]
  status: "actif" | "en attente" | "banni"
}

export default function AdminBeatmakersPage() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>([])

  useEffect(() => {
    // Appel API à remplacer par une vraie API plus tard
    setBeatmakers([
      {
        id: "1",
        nom: "DrillBeatz",
        email: "drill@example.com",
        abonnements: ["Or", "Distribution"],
        status: "actif",
      },
      {
        id: "2",
        nom: "TrapKing",
        email: "trap@example.com",
        abonnements: ["Gratuit"],
        status: "en attente",
      },
      {
        id: "3",
        nom: "808Master",
        email: "master@example.com",
        abonnements: ["Diamant Plus"],
        status: "banni",
      },
    ])
  }, [])

  const handleEdit = (id: string) => {
    console.log("Modifier beatmaker", id)
  }

  const handleBan = (id: string) => {
    console.log("Bannir beatmaker", id)
  }

  const handleDelete = (id: string) => {
    console.log("Supprimer beatmaker", id)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Beatmakers</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-darkbg2 text-gray-300">
            <tr>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Abonnements</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {beatmakers.map((b) => (
              <tr key={b.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{b.nom}</td>
                <td className="px-4 py-2">{b.email}</td>
                <td className="px-4 py-2">
                  {b.abonnements.map((a, i) => (
                    <span
                      key={i}
                      className="inline-block bg-purple-700 text-white text-xs px-2 py-1 rounded-full mr-2"
                    >
                      {a}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2">
                  <StatusBadge status={b.status} />
                </td>
                <td className="px-4 py-2 text-right">
                  <ActionMenu
                    onEdit={() => handleEdit(b.id)}
                    onBan={() => handleBan(b.id)}
                    onDelete={() => handleDelete(b.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
