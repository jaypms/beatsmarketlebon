import { Badge } from "@/components/ui/badge"

interface UserStatusBadgeProps {
  status: "validé" | "en attente" | "refusé"
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const statusMap: Record<UserStatusBadgeProps["status"], { label: string; variant: "default" | "secondary" | "destructive" }> = {
    validé: {
      label: "Validé",
      variant: "default", // couleur principale (ex : vert ou rose vif)
    },
    "en attente": {
      label: "En attente",
      variant: "secondary", // gris
    },
    refusé: {
      label: "Refusé",
      variant: "destructive", // rouge
    },
  }

  const { label, variant } = statusMap[status]

  return <Badge variant={variant}>{label}</Badge>
}
