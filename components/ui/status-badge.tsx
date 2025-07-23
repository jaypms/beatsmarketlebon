import React from "react"
import { cn } from "@/lib/utils"

type Status = "actif" | "en attente" | "banni"

const statusColors: Record<Status, string> = {
  actif: "bg-green-600 text-white",
  "en attente": "bg-yellow-500 text-black",
  banni: "bg-red-600 text-white",
}

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize",
        statusColors[status]
      )}
    >
      {status}
    </span>
  )
}
