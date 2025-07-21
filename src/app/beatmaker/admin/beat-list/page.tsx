"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Beat {
  id: string
  title: string
  status: "En ligne" | "Brouillon" | "En attente"
}

export default function BeatListPage() {
  const [beats, setBeats] = useState<Beat[]>([])

  useEffect(() => {
    // Exemple : tu devras remplacer par ton appel API réel
    const fetchBeats = async () => {
      const response = await fetch("/api/beatmaker/beats")
      const data = await response.json()
      setBeats(data)
    }

    fetchBeats()
  }, [])

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">Mes Beats</h1>

      {beats.length === 0 ? (
        <p className="text-gray-400">Aucun beat trouvé.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beats.map((beat) => (
            <Card key={beat.id} className="bg-gray-900 text-white">
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{beat.title}</h2>
                <p className="text-sm text-gray-400">Statut : {beat.status}</p>
                
                {beat?.id && (
                  <Link href={`/beatmaker/admin/beat-edit/${beat.id}`}>
                    <Button className="mt-2">Modifier</Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
