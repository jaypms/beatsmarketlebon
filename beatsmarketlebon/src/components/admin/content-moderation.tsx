import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const flaggedBeats = [
  {
    title: "Dark Soul Type Beat",
    author: "K-Mello",
    reason: "Contenu inapproprié signalé",
    status: "En attente",
  },
  {
    title: "Neuro Glitch Trap",
    author: "NeuroType",
    reason: "Plagiat suspecté",
    status: "Revu",
  },
]

export function ContentModeration() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Modération de contenu</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {flaggedBeats.map((beat, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 border-b pb-3"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold">{beat.title}</p>
              <p className="text-sm text-muted-foreground">
                Par <span className="font-medium">{beat.author}</span>
              </p>
              <p className="text-xs text-red-500">{beat.reason}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  beat.status === "En attente" ? "destructive" : "secondary"
                }
              >
                {beat.status}
              </Badge>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
