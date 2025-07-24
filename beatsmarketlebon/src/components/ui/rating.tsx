"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
}

export function Rating({ value, max = 5, onChange, readOnly = false }: RatingProps) {
  const stars = []

  for (let i = 1; i <= max; i++) {
    stars.push(
      <button
        key={i}
        type="button"
        disabled={readOnly}
        onClick={() => onChange?.(i)}
        className={cn(
          "cursor-pointer p-1 text-yellow-400",
          i <= value ? "opacity-100" : "opacity-40"
        )}
        aria-label={`Donner ${i} étoiles`}
      >
        <Star />
      </button>
    )
  }

  return <div className="flex space-x-1">{stars}</div>
}
