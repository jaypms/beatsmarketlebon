import { Loader2 } from "lucide-react"

export function TableLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
      <Loader2 className="mb-4 h-6 w-6 animate-spin" />
      <p className="text-sm">Chargement des données...</p>
    </div>
  )
}
