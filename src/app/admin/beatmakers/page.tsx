"use client"

import React, { useEffect, useState } from "react"
import { StatusBadge } from "@/components/ui/status-badge"
import { ActionMenu } from "@/components/ui/action-menu"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

type Beatmaker = {
  id: string
  name: string
  email: string
  status: "actif" | "en attente" | "banni"
  beatsCount: number
  revenue: number
}

export default function AdminBeatmakersPage() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulation d'appel API
    const fetchData = async () => {
      setLoading(true)
      try {
        // Remplacer ceci par un appel réel à ton backend
        const data: Beatmaker[] = [
          {
            id: "1",
            name: "Jay Jay",
            email: "jay@example.com",
            status: "actif",
            beatsCount: 18,
            revenue: 1560,
          },
          {
            id: "2",
            name: "Sophie",
            email: "sophie@example.com",
            status: "en attente",
            beatsCount: 4,
            revenue: 320,
          },
          {
            id: "3",
            name: "Marc",
            email: "marc@example.com",
            status: "banni",
            beatsCount: 0,
            revenue: 0,
          },
        ]
        setBeatmakers(data)
      } catch (error) {
        console.error("Erreur de chargement :", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleEdit = (id: string) => {
    alert(`Modifier beatmaker ${id}`)
  }

  const handleBan = (id: string) => {
    alert(`Bannir beatmaker ${id}`)
  }

  const handleDelete = (id: string) => {
    const confirmDelete = confirm("Supprimer définitivement ce beatmaker ? Cette action est irréversible.")
    if (confirmDelete) {
      alert(`Beatmaker ${id} supprimé`)
    }
  }

  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-primary">Gestion des Beatmakers</h1>
        <Button variant="default" className="gap-2">
          <PlusCircle className="w-5 h-5" />
          Ajouter
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-400">Chargement en cours...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-darkbg2 text-gray-300">
              <tr>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Beats en ligne</th>
                <th className="px-4 py-3">Revenu (€)</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {beatmakers.map((b) => (
                <tr key={b.id} className="border-t border-gray-700 hover:bg-darkbg2/40">
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.email}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="px-4 py-3">{b.beatsCount}</td>
                  <td className="px-4 py-3">{b.revenue.toFixed(2)}</td>
                  <td className="px-4 py-3 text-center">
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
      )}
    </section>
  )
}
