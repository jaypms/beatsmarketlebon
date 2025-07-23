"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = ProgressPrimitive.Root
const ProgressIndicator = ProgressPrimitive.Indicator

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  className?: string
  value: number
}

export function CustomProgress({ className, value, ...props }: ProgressProps) {
  return (
    <Progress
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      value={value}
      {...props}
    >
      <ProgressIndicator
        className="h-full bg-primary transition-all"
        style={{ width: `${value}%` }}
      />
    </Progress>
  )
}
