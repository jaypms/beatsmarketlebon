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
  const [mp3, setMp3] = useState<File | null>(null)
  const [wav, setWav] = useState<File | null>(null)
  const [stems, setStems] = useState<FileList | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCreate = async () => {
    if (!title) return toast.error("Le titre est requis.")
    if (!mp3) return toast.error("Le fichier MP3 est requis.")
    if (mp3.size > 15 * 1024 * 1024) return toast.error("MP3 trop lourd (max 15 Mo).")
    if (wav && wav.size > 50 * 1024 * 1024) return toast.error("WAV trop lourd (max 50 Mo).")
    if (stems) {
      for (let i = 0; i < stems.length; i++) {
        if (stems[i].size > 60 * 1024 * 1024) {
          return toast.error(`Stem trop lourd (${stems[i].name}) (max 60 Mo).`)
        }
      }
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("status", status)
      formData.append("mp3", mp3)
      if (wav) formData.append("wav", wav)
      if (stems) {
        Array.from(stems).forEach((file) => {
          formData.append("stems", file)
        })
      }

      const res = await fetch("/api/beatmaker/beats", {
        method: "POST",
        body: formData,
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
          placeholder="Ex. : Trap Soul"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Statut</Label>
        <Select value={status} onValueChange={(v) => setStatus(v as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="En ligne">En ligne</SelectItem>
            <SelectItem value="Brouillon">Brouillon</SelectItem>
            <SelectItem value="En attente">En attente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mp3">Fichier MP3 (max 15 Mo)</Label>
        <Input
          id="mp3"
          type="file"
          accept=".mp3"
          onChange={(e) => setMp3(e.target.files?.[0] || null)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="wav">Fichier WAV (max 50 Mo, optionnel)</Label>
        <Input
          id="wav"
          type="file"
          accept=".wav"
          onChange={(e) => setWav(e.target.files?.[0] || null)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="stems">Stems (multipiste, max 60 Mo chacun, optionnel)</Label>
        <Input
          id="stems"
          type="file"
          accept=".wav,.mp3"
          multiple
          onChange={(e) => setStems(e.target.files)}
        />
      </div>

      <Button disabled={loading} onClick={handleCreate}>
        Créer le beat
      </Button>
    </div>
  )
}
