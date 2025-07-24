import { Badge } from "@/components/ui/badge"

export default function BeatStatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; variant: "secondary" | "success" | "warning" | "destructive" }> = {
    draft: { label: "Brouillon", variant: "secondary" },
    published: { label: "En ligne", variant: "success" },
    disabled: { label: "Retiré", variant: "warning" },
    blocked: { label: "Désactivé", variant: "destructive" },
  }

  const info = map[status] || { label: "Inconnu", variant: "secondary" }

  return <Badge variant={info.variant}>{info.label}</Badge>
}
