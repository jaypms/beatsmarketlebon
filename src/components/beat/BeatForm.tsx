"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface BeatData {
  id?: string
  title: string
  description: string
  bpm: number
  genre: string
  price: number
}

interface BeatFormProps {
  initialData?: BeatData
}

export default function BeatForm({ initialData }: BeatFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<BeatData>(
    initialData || {
      title: "",
      description: "",
      bpm: 120,
      genre: "",
      price: 0,
    }
  )
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "bpm" || name === "price" ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const method = formData.id ? "PUT" : "POST"
    const url = formData.id
      ? `/api/beatmaker/beats/${formData.id}`
      : "/api/beatmaker/beats"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    setLoading(false)

    if (res.ok) {
      router.push("/beatmaker/admin/beat-list")
    } else {
      alert("Erreur lors de la sauvegarde.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Titre</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="bpm">BPM</Label>
        <Input
          id="bpm"
          name="bpm"
          type="number"
          value={formData.bpm}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="genre">Genre</Label>
        <Input id="genre" name="genre" value={formData.genre} onChange={handleChange} required />
      </div>

      <div>
        <Label htmlFor="price">Prix (€)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Enregistrement..." : "Enregistrer"}
      </Button>
    </form>
  )
}
