"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: "En attente" | "Validé" | "Refusé"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let variant = "default"

  switch (status) {
    case "En attente":
      variant = "warning"
      break
    case "Validé":
      variant = "success"
      break
    case "Refusé":
      variant = "destructive"
      break
  }

  return <Badge variant={variant}>{status}</Badge>
}
