"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import BeatStatusBadge from "@/components/beat/BeatStatusBadge"

export default function BeatEditPage() {
  const router = useRouter()
  const params = useParams()
  const beatId = params?.id

  const [title, setTitle] = useState("")
  const [status, setStatus] = useState<"draft" | "published" | "disabled" | "blocked">("draft")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!beatId) return
    async function fetchBeat() {
      const res = await fetch(`/api/beatmaker/beats/${beatId}`)
      if (res.ok) {
        const data = await res.json()
        setTitle(data.title)
        setStatus(data.status)
      } else {
        toast.error("Beat introuvable.")
        router.push("/beatmaker/admin/beat-list")
      }
    }
    fetchBeat()
  }, [beatId])

  const handleSave = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/beatmaker/beats/${beatId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, status }),
      })
      if (!res.ok) throw new Error()
      toast.success("Beat mis à jour.")
    } catch {
      toast.error("Erreur lors de la mise à jour.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Modifier le beat</h1>

      <div className="space-y-2">
        <Label htmlFor="title">Titre du beat</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Statut</Label>
        <Select value={status} onValueChange={(v) => setStatus(v as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Brouillon</SelectItem>
            <SelectItem value="published">En ligne</SelectItem>
            <SelectItem value="disabled">Retiré</SelectItem>
            {/* Le statut "blocked" est réservé au SuperAdmin, donc pas dans cette liste */}
          </SelectContent>
        </Select>
      </div>

      <div>
        <BeatStatusBadge status={status} />
      </div>

      <Button disabled={loading} onClick={handleSave}>
        Sauvegarder
      </Button>
    </div>
  )
}
