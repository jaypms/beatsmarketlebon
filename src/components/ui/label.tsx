"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("block mb-2 text-sm font-medium text-muted-foreground", className)}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
