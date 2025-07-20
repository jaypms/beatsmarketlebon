"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchBeats, saveBeat, type Beat } from "@/lib/api/beats"

type LicenseType = "basique" | "premium" | "exclusive" | "exclusive_plus"

export default function BeatEditPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const beatId = searchParams.get("id") || ""

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [prices, setPrices] = useState<Record<LicenseType, number>>({
    basique: 0,
    premium: 0,
    exclusive: 0,
    exclusive_plus: 0,
  })
  const [miniatureUrl, setMiniatureUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Charger les données du beat si id présent
  useEffect(() => {
    if (!beatId) return
    setLoading(true)
    fetchBeats()
      .then((beats) => {
        const beat = beats.find((b) => b.id === beatId)
        if (beat) {
          setTitle(beat.title)
          setDescription(beat.description || "")
          setPrices(beat.prices)
          setMiniatureUrl(beat.miniatureUrl || "")
          setError(null)
        } else {
          setError("Beat introuvable")
        }
      })
      .catch(() => setError("Erreur chargement beat"))
      .finally(() => setLoading(false))
  }, [beatId])

  const COMMISSION_RATE = 0.15
  const TVA_RATE = 0.20
  const PROMO_RATE = 0 // À récupérer dynamiquement

  function calcNetGain(price: number) {
    if (price <= 0) return 0
    const afterPromo = price * (1 - PROMO_RATE)
    const commission = afterPromo * COMMISSION_RATE
    const tva = afterPromo * TVA_RATE
    return afterPromo - commission - tva
  }

  function handlePriceChange(license: LicenseType, value: string) {
    const val = parseFloat(value)
    if (isNaN(val) || val < 0) return
    setPrices((prev) => ({ ...prev, [license]: val }))
  }

  async function handleSave() {
    if (!title.trim()) {
      alert("Le titre est obligatoire.")
      return
    }
    setLoading(true)
    try {
      await saveBeat({
        id: beatId || undefined,
        title,
        description,
        miniatureUrl,
        prices,
      })
      alert("Beat sauvegardé avec succès.")
      router.push("/beatmaker/admin/beat-list")
    } catch {
      alert("Erreur lors de la sauvegarde.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        {beatId ? "Édition Beat" : "Création Beat"}
      </h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Titre *</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nom du beat"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description du beat"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="miniature">Miniature (URL)</Label>
            <Input
              id="miniature"
              type="url"
              value={miniatureUrl}
              onChange={(e) => setMiniatureUrl(e.target.value)}
              placeholder="https://exemple.com/image.jpg"
            />
            <p className="text-sm text-gray-500 mt-1">
              Il est conseillé d&apos;ajouter une miniature pour mieux attirer
              les clients.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prix par licence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(["basique", "premium", "exclusive", "exclusive_plus"] as LicenseType[]).map(
            (license) => (
              <div key={license} className="flex items-center gap-4">
                <Label className="w-32 capitalize" htmlFor={`price-${license}`}>
                  {license.replace("_", " ")}
                </Label>
                <Input
                  id={`price-${license}`}
                  type="number"
                  min={0}
                  step={0.01}
                  value={prices[license]}
                  onChange={(e) => handlePriceChange(license, e.target.value)}
                />
                <div className="ml-auto text-right w-40">
                  Gain net estimé:{" "}
                  <span className="font-semibold">
                    {calcNetGain(prices[license]).toFixed(2)} €
                  </span>
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full" disabled={loading}>
        {loading ? "Sauvegarde..." : "Sauvegarder le beat"}
      </Button>
    </div>
  )
}
