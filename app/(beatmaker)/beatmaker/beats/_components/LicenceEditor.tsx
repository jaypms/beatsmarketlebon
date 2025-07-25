'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { licences } from '@/lib/data/licences'
import { Switch } from '@/components/ui/switch'
import { calculateBeatmakerEarnings } from '@/lib/utils/commission'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Props = {
  value: Record<string, number>
  onChange: (updated: Record<string, number>) => void
}

export default function LicenceEditor({ value, onChange }: Props) {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(licences.map((l) => [l.id, value[l.id] > 0]))
  )

  const handleToggle = (id: string) => {
    const updated = { ...enabled, [id]: !enabled[id] }
    setEnabled(updated)
    if (!updated[id]) {
      const clone = { ...value }
      delete clone[id]
      onChange(clone)
    }
  }

  const handlePriceChange = (id: string, price: number) => {
    onChange({ ...value, [id]: price })
  }

  return (
    <div className="grid gap-4">
      {licences.map((licence) => {
        const isActive = enabled[licence.id]
        const price = value[licence.id] || 0
        const earnings = calculateBeatmakerEarnings(price)

        return (
          <Card key={licence.id} className={isActive ? '' : 'opacity-50'}>
            <CardContent className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex items-center gap-3">
                <Switch
                  checked={isActive}
                  onCheckedChange={() => handleToggle(licence.id)}
                  disabled={licence.disabled}
                />
                <div>
                  <div className="font-semibold">{licence.label}</div>
                  <div className="text-sm text-muted-foreground">{licence.description}</div>
                </div>
              </div>

              {isActive && (
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor={`price-${licence.id}`}>Prix (€)</Label>
                    <Input
                      id={`price-${licence.id}`}
                      type="number"
                      min={1}
                      step={1}
                      value={price}
                      onChange={(e) => handlePriceChange(licence.id, parseFloat(e.target.value))}
                      className="w-32"
                    />
                  </div>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="text-sm text-right text-muted-foreground">
                          Gain estimé :
                          <div className="text-foreground font-semibold">
                            {earnings} €
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gain après déduction : commission site + Stripe + TVA</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}