import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  icon?: React.ReactNode
  description?: string
}

export default function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="text-2xl font-bold">{value}</div>
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        {icon && <div className="text-3xl text-muted-foreground">{icon}</div>}
      </CardContent>
    </Card>
  )
}
