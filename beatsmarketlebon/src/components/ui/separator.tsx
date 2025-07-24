"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<"hr">,
  React.ComponentPropsWithoutRef<"hr">
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("border-border bg-border h-px border-0", className)}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }
