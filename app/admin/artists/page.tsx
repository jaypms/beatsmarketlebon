"use client"

import React from "react"
import { StatusBadge } from "@/components/ui/status-badge"
import { ActionMenu } from "@/components/ui/action-menu"

type Artist = {
  id: string
  name: string
  email: string
  status: "actif" | "en attente" | "banni"
  purchasesCount: number
  spent: number
}

const dummyArtists: Artist[] = [
  { id: "1", name: "Laura", email: "laura@example.com", status: "actif", purchasesCount: 8, spent: 250 },
  { id: "2", name: "David", email: "david@example.com", status: "en attente", purchasesCount: 0, spent: 0 },
  { id: "3", name: "Sarah", email: "sarah@example.com", status: "banni", purchasesCount: 3, spent: 80 },
]

export default function AdminArtistsPage() {
  const handleEdit = (id: string) => {
    alert(`Éditer artiste ${id}`)
  }
  const handleBan = (id: string) => {
    alert(`Bannir artiste ${id}`)
  }
  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet artiste ? Cette action est irréversible.")) {
      alert(`Artiste ${id} supprimé`)
    }
  }

  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Gestion des Artistes</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-darkbg2 text-gray-300">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Achats</th>
              <th className="px-4 py-3">Total dépensé (€)</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyArtists.map((a) => (
              <tr key={a.id} className="border-t border-gray-700 hover:bg-darkbg2/50">
                <td className="px-4 py-3">{a.name}</td>
                <td className="px-4 py-3">{a.email}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={a.status} />
                </td>
                <td className="px-4 py-3">{a.purchasesCount}</td>
                <td className="px-4 py-3">{a.spent.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <ActionMenu
                    onEdit={() => handleEdit(a.id)}
                    onBan={() => handleBan(a.id)}
                    onDelete={() => handleDelete(a.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
