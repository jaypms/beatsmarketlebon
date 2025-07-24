import { Badge } from "@/components/ui/badge"

interface UserRoleBadgeProps {
  role: "superadmin" | "admin-artist" | "admin-beatmaker"
}

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  const roleMap: Record<UserRoleBadgeProps["role"], { label: string; variant: "default" | "secondary" | "destructive" }> = {
    superadmin: {
      label: "SuperAdmin",
      variant: "default", // couleur principale
    },
    "admin-artist": {
      label: "Admin Artiste",
      variant: "secondary", // gris
    },
    "admin-beatmaker": {
      label: "Admin Beatmaker",
      variant: "destructive", // rouge ou accent
    },
  }

  const { label, variant } = roleMap[role]

  return <Badge variant={variant}>{label}</Badge>
}
