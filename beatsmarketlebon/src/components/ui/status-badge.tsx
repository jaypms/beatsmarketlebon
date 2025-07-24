import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: "actif" | "en attente" | "refusé" | "brouillon"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusMap: Record<StatusBadgeProps["status"], { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    actif: {
      label: "Actif",
      variant: "default", // vert ou couleur principale
    },
    "en attente": {
      label: "En attente",
      variant: "secondary", // gris
    },
    refusé: {
      label: "Refusé",
      variant: "destructive", // rouge
    },
    brouillon: {
      label: "Brouillon",
      variant: "outline", // contour simple
    },
  }

  const { label, variant } = statusMap[status]

  return <Badge variant={variant}>{label}</Badge>
}
