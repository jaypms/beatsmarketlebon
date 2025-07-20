"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type LicenseType = "basique" | "premium" | "exclusive" | "exclusive_plus"

type Prices = {
  [key in LicenseType]: number
}

export default function BeatEditPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [prices, setPrices] = useState<Prices>({
    basique: 0,
    premium: 0,
    exclusive: 0,
    exclusive_plus: 0,
  })
  const [miniatureUrl, setMiniatureUrl] = useState("")
  const [showInfoImage, setShowInfoImage] = useState(true)

  // Exemple commission, TVA, promo (à récupérer dynamiquement dans l'idéal)
  const COMMISSION_RATE = 0.15 // 15% commission site
  const TVA_RATE = 0.20 // 20% TVA
  const PROMO_RATE = 0 // 0 si aucune promo

  // Calcul dynamique du gain net estimé (prix - commission - tva - promo)
  function calcNetGain(price: number) {
    if (price <= 0) return 0
    const afterPromo = price * (1 - PROMO_RATE)
    const commission = afterPromo * COMMISSION_RATE
    const tva = afterPromo * TVA_RATE
    return afterPromo - commission - tva
  }

  // Handler changement prix licence
  function handlePriceChange(license: LicenseType, value: string) {
    const val = parseFloat(value)
    if (isNaN(val) || val < 0) return
    setPrices((prev) => ({ ...prev, [license]: val }))
  }

  function handleSave() {
    // Validation minimale
    if (!title.trim()) {
      alert("Le titre est obligatoire.")
      return
    }
    // Sauvegarde API à implémenter ici
    alert("Beat sauvegardé (simulation).")
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Édition Beat</h1>

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
            {showInfoImage && (
              <p className="text-sm text-gray-500 mt-1">
                Il est conseillé d'ajouter une miniature pour mieux attirer les clients.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prix par licence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(["basique", "premium", "exclusive", "exclusive_plus"] as LicenseType[]).map((license) => (
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
          ))}
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Sauvegarder le beat
      </Button>
    </div>
  )
}
