"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

interface BeatFormProps {
  onSubmit: (data: BeatFormValues) => void
  initialData?: BeatFormValues
  loading?: boolean
}

export interface BeatFormValues {
  title: string
  description: string
  genre: string
  tags: string
  priceMp3: number
  priceWav: number
  priceExclusive: number
  isVisible: boolean
}

export default function BeatForm({
  onSubmit,
  initialData,
  loading = false,
}: BeatFormProps) {
  const [form, setForm] = useState<BeatFormValues>(
    initialData || {
      title: "",
      description: "",
      genre: "",
      tags: "",
      priceMp3: 0,
      priceWav: 0,
      priceExclusive: 0,
      isVisible: true,
    }
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitch = (value: boolean) => {
    setForm((prev) => ({ ...prev, isVisible: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Titre</Label>
          <Input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="genre">Genre</Label>
          <Input
            id="genre"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
          <Input
            id="tags"
            name="tags"
            value={form.tags}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="priceMp3">Prix MP3 (€)</Label>
          <Input
            type="number"
            id="priceMp3"
            name="priceMp3"
            value={form.priceMp3}
            onChange={handleChange}
            min={0}
            step={0.01}
          />
        </div>

        <div>
          <Label htmlFor="priceWav">Prix WAV (€)</Label>
          <Input
            type="number"
            id="priceWav"
            name="priceWav"
            value={form.priceWav}
            onChange={handleChange}
            min={0}
            step={0.01}
          />
        </div>

        <div>
          <Label htmlFor="priceExclusive">Prix Exclusif (€)</Label>
          <Input
            type="number"
            id="priceExclusive"
            name="priceExclusive"
            value={form.priceExclusive}
            onChange={handleChange}
            min={0}
            step={0.01}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="visibility">Visible dans la boutique</Label>
        <Switch
          id="visibility"
          checked={form.isVisible}
          onCheckedChange={handleSwitch}
        />
      </div>

      <Button type="submit" disabled={loading} className={cn(loading && "opacity-50")}>
        {loading ? "Enregistrement..." : "Enregistrer le beat"}
      </Button>
    </form>
  )
}
