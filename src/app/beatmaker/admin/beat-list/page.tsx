"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { fetchBeats, deleteBeat, type Beat } from "@/lib/api/beats"

export default function BeatListPage() {
  const [beats, setBeats] = useState<Beat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetchBeats()
      .then((data) => {
        setBeats(data)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleDelete(id: string) {
    if (confirm("Voulez-vous vraiment supprimer ce beat ? Cette action est irréversible.")) {
      try {
        await deleteBeat(id)
        setBeats((prev) => prev.filter((b) => b.id !== id))
        alert("Beat supprimé avec succès.")
      } catch (e) {
        alert("Erreur lors de la suppression.")
      }
    }
  }

  function getMinPrice(prices: Beat["prices"]) {
    return Math.min(...Object.values(prices))
  }

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-600">Erreur: {error}</p>
  if (beats.length === 0) return <p>Aucun beat disponible.</p>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mes Beats</h1>

      <div className="space-y-4">
        {beats.map((beat) => (
          <Card key={beat.id} className="flex items-center gap-4 p-4">
            <img
              src={beat.miniatureUrl || "/images/placeholder-beat.png"}
              alt={`Miniature de ${beat.title}`}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{beat.title}</h2>
              <p>Prix minimum : {getMinPrice(beat.prices).toFixed(2)} €</p>
            </div>
            <div className="flex gap-2">
              <Link href={`/beatmaker/admin/beat-edit/${beat.id}`}>
                <Button variant="outline" size="sm">
                  Éditer
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(beat.id)}
              >
                Supprimer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
