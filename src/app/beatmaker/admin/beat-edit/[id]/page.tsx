"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface Beat {
  id: string
  title: string
  status: "En ligne" | "Brouillon" | "En attente"
}

export default function BeatEditPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params as { id?: string }

  const [beat, setBeat] = useState<Beat | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchBeat = async () => {
      try {
        const res = await fetch(`/api/beatmaker/beats/${id}`)
        const data = await res.json()
        setBeat(data)
      } catch (error) {
        toast.error("Erreur lors du chargement du beat.")
      } finally {
        setLoading(false)
      }
    }

    fetchBeat()
  }, [id])

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/beatmaker/beats/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(beat),
      })

      if (!res.ok) throw new Error("Erreur")

      toast.success("Modifications enregistrées !")
      router.push("/beatmaker/admin/beat-list")
    } catch {
      toast.error("Erreur lors de l'enregistrement.")
    }
  }

  if (!id) return <p className="text-red-500 p-4">ID invalide.</p>
  if (loading) return <p className="p-4 text-gray-400">Chargement...</p>
  if (!beat) return <p className="p-4 text-red-400">Beat introuvable.</p>

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Modifier le beat</h1>

      <div className="space-y-2">
        <Label htmlFor="title">Titre</Label>
        <Input
          id="title"
          value={beat.title}
          onChange={(e) => setBeat({ ...beat, title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Statut</Label>
        <Select
          value={beat.status}
          onValueChange={(value) =>
            setBeat({ ...beat, status: value as Beat["status"] })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="En ligne">En ligne</SelectItem>
            <SelectItem value="Brouillon">Brouillon</SelectItem>
            <SelectItem value="En attente">En attente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-4">
        <Button onClick={handleSave}>Enregistrer</Button>
        <Button variant="ghost" onClick={() => router.back()}>
          Annuler
        </Button>
      </div>
    </div>
  )
}
