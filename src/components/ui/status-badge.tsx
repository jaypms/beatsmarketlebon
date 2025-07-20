import React from "react"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "actif" | "en attente" | "suspendu" | "supprimé"
}

const statusColors: Record<StatusBadgeProps["status"], string> = {
  actif: "bg-green-500 text-white",
  "en attente": "bg-yellow-400 text-black",
  suspendu: "bg-red-500 text-white",
  supprimé: "bg-gray-500 text-white",
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        statusColors[status]
      )}
    >
      {status}
    </span>
  )
}
