"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { calculateNetRevenue } from "@/lib/revenueCalculator"
import { BeatmakerPlan } from "@/lib/constants"

interface LicensePrice {
  name: string
  price: number | ""
}

interface EditLicensesTableProps {
  defaultPrices?: Record<string, number>
  beatmakerPlan: BeatmakerPlan
  promoPercent: number // entre 0 et 100 (ex : 20 pour -20%)
}

export default function EditLicensesTable({
  defaultPrices = {},
  beatmakerPlan,
  promoPercent = 0,
}: EditLicensesTableProps) {
  const [licenses, setLicenses] = useState<LicensePrice[]>([
    { name: "MP3", price: defaultPrices["MP3"] ?? "" },
    { name: "WAV", price: defaultPrices["WAV"] ?? "" },
    { name: "Exclusive", price: defaultPrices["Exclusive"] ?? "" },
    { name: "Stems", price: defaultPrices["Stems"] ?? "" },
  ])

  const [estimates, setEstimates] = useState<Record<string, string>>({})

  useEffect(() => {
    const newEstimates: Record<string, string> = {}

    licenses.forEach((license) => {
      if (license.price !== "") {
        const net = calculateNetRevenue({
          price: Number(license.price),
          plan: beatmakerPlan,
          promoPercent,
        })

        newEstimates[license.name] = net.toFixed(2) + " €"
      } else {
        newEstimates[license.name] = "-"
      }
    })

    setEstimates(newEstimates)
  }, [licenses, beatmakerPlan, promoPercent])

  const handleChange = (index: number, value: string) => {
    const newLicenses = [...licenses]
    const price = parseFloat(value)
    newLicenses[index].price = isNaN(price) ? "" : price
    setLicenses(newLicenses)
  }

  return (
    <Card className="p-4">
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-4 font-semibold text-sm text-muted-foreground">
          <div>Licence</div>
          <div>Prix (TTC)</div>
          <div>Promo {promoPercent}%</div>
          <div>Gain estimé</div>
        </div>

        {licenses.map((license, index) => (
          <div
            key={license.name}
            className="grid grid-cols-4 items-center gap-2"
          >
            <Label>{license.name}</Label>

            <Input
              type="number"
              step="0.01"
              value={license.price}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="ex: 29.99"
            />

            <div className="text-sm text-muted-foreground">
              {promoPercent > 0 && license.price !== ""
                ? "-" +
                  (
                    (Number(license.price) * promoPercent) /
                    100
                  ).toFixed(2) + " €"
                : "-"}
            </div>

            <div className="text-sm font-medium">{estimates[license.name]}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
