import React from "react"
import { StatusBadge } from "@/components/ui/status-badge"
import { ActionMenu } from "@/components/ui/action-menu"

type Beatmaker = {
  id: string
  name: string
  email: string
  status: "actif" | "en attente" | "banni"
  beatsCount: number
  revenue: number
}

const dummyBeatmakers: Beatmaker[] = [
  { id: "1", name: "Jay Jay", email: "jay@example.com", status: "actif", beatsCount: 12, revenue: 1200 },
  { id: "2", name: "Sophie", email: "sophie@example.com", status: "en attente", beatsCount: 5, revenue: 450 },
  { id: "3", name: "Marc", email: "marc@example.com", status: "banni", beatsCount: 0, revenue: 0 },
]

export default function AdminBeatmakersPage() {
  const handleEdit = (id: string) => {
    alert(`Éditer beatmaker ${id}`)
  }
  const handleBan = (id: string) => {
    alert(`Bannir beatmaker ${id}`)
  }
  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce beatmaker ? Cette action est irréversible.")) {
      alert(`Beatmaker ${id} supprimé`)
    }
  }

  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Gestion des Beatmakers</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-darkbg2 text-gray-300">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Beats en ligne</th>
              <th className="px-4 py-3">Revenu (€)</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyBeatmakers.map((b) => (
              <tr key={b.id} className="border-t border-gray-700 hover:bg-darkbg2/50">
                <td className="px-4 py-3">{b.name}</td>
                <td className="px-4 py-3">{b.email}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={b.status} />
                </td>
                <td className="px-4 py-3">{b.beatsCount}</td>
                <td className="px-4 py-3">{b.revenue.toFixed(2)}</td>
                <td className="px-4 py-3">
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
    </section>
  )
}
