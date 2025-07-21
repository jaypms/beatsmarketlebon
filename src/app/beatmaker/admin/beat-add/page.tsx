"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function BeatAddPage() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [status, setStatus] = useState<"En ligne" | "Brouillon" | "En attente">("Brouillon")
  const [loading, setLoading] = useState(false)

  const handleCreate = async () => {
    if (!title) {
      toast.error("Le titre est requis.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/beatmaker/beats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, status }),
      })

      if (!res.ok) throw new Error()

      const data = await res.json()
      toast.success("Beat créé avec succès.")
      router.push(`/beatmaker/admin/beat-edit/${data.id}`)
    } catch {
      toast.error("Erreur lors de la création du beat.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Ajouter un beat</h1>

      <div className="space-y-2">
        <Label htmlFor="title">Titre du beat</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex. : Trap Vibes Vol.2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Statut initial</Label>
        <Select value={status} onValueChange={(v) => setStatus(v as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Choisir un statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="En ligne">En ligne</SelectItem>
            <SelectItem value="Brouillon">Brouillon</SelectItem>
            <SelectItem value="En attente">En attente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button disabled={loading} onClick={handleCreate}>
        Créer le beat
      </Button>
    </div>
  )
}
