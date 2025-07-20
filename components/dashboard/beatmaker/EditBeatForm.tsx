import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { calculateEarnings } from "@/lib/utils"
import type { BeatLicense } from "@/types"

interface EditBeatFormProps {
  licenses: BeatLicense[]
  defaultPrices: { [key: string]: number }
  onPriceChange: (updated: { [key: string]: number }) => void
}

export default function EditBeatForm({
  licenses,
  defaultPrices,
  onPriceChange,
}: EditBeatFormProps) {
  const [prices, setPrices] = useState(defaultPrices)
  const [earnings, setEarnings] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const updatedEarnings: { [key: string]: number } = {}
    licenses.forEach((license) => {
      const price = prices[license.id] || 0
      updatedEarnings[license.id] = calculateEarnings(price)
    })
    setEarnings(updatedEarnings)
    onPriceChange(prices)
  }, [prices])

  const handleChange = (licenseId: string, value: string) => {
    const price = parseFloat(value)
    if (!isNaN(price)) {
      setPrices((prev) => ({
        ...prev,
        [licenseId]: price,
      }))
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="grid gap-4 p-4">
        {licenses.map((license) => (
          <div key={license.id} className="grid gap-2">
            <Label htmlFor={`price-${license.id}`}>
              {license.name}
            </Label>
            <Input
              id={`price-${license.id}`}
              type="number"
              value={prices[license.id] ?? ""}
              placeholder="Prix en €"
              onChange={(e) => handleChange(license.id, e.target.value)}
            />
            <div className="text-sm text-muted-foreground">
              <Badge variant="outline">
                Gain estimé : {earnings[license.id]?.toFixed(2)} €
              </Badge>
            </div>
            <Separator />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
