import React from "react"

type Status = "actif" | "en attente" | "banni"

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let color = "bg-gray-500"
  if (status === "actif") color = "bg-green-600"
  else if (status === "en attente") color = "bg-yellow-500"
  else if (status === "banni") color = "bg-red-600"

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
      {status.toUpperCase()}
    </span>
  )
}
