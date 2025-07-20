"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Beat = {
  id: string
  title: string
  miniatureUrl?: string
  prices: {
    basique: number
    premium: number
    exclusive: number
    exclusive_plus: number
  }
}

export default function BeatListPage() {
  const [beats, setBeats] = useState<Beat[]>([])

  // Simuler fetch depuis API/backend
  useEffect(() => {
    // Ici, fetch les beats depuis API
    // Exemple statique pour test :
    setBeats([
      {
        id: "1",
        title: "Beat 1",
        miniatureUrl: "https://via.placeholder.com/80",
        prices: { basique: 20, premium: 40, exclusive: 70, exclusive_plus: 100 },
      },
      {
        id: "2",
        title: "Beat 2",
        miniatureUrl: "",
        prices: { basique: 15, premium: 30, exclusive: 50, exclusive_plus: 80 },
      },
    ])
  }, [])

  function handleDelete(id: string) {
    if (confirm("Voulez-vous vraiment supprimer ce beat ? Cette action est irréversible.")) {
      // Appeler API pour supprimer beat par id
      setBeats((prev) => prev.filter((b) => b.id !== id))
      alert("Beat supprimé (simulation).")
    }
  }

  // Trouver prix minimum parmi les licences
  function getMinPrice(prices: Beat["prices"]) {
    return Math.min(...Object.values(prices))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mes Beats</h1>

      {beats.length === 0 && <p>Aucun beat disponible.</p>}

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
