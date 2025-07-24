import { Inbox } from "lucide-react"

interface TableEmptyProps {
  message?: string
}

export function TableEmpty({ message = "Aucune donnée à afficher." }: TableEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
      <Inbox className="mb-4 h-8 w-8" />
      <p className="text-sm">{message}</p>
    </div>
  )
}
