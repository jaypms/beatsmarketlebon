"use client"

import * as React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

const Collapse = Collapsible.Root

interface CollapseTriggerProps extends React.ComponentPropsWithoutRef<typeof Collapsible.Trigger> {
  className?: string
}

const CollapseTrigger = React.forwardRef<
  React.ElementRef<typeof Collapsible.Trigger>,
  CollapseTriggerProps
>(({ className, ...props }, ref) => (
  <Collapsible.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      className
    )}
    {...props}
  />
))

CollapseTrigger.displayName = Collapsible.Trigger.displayName

interface CollapseContentProps extends React.ComponentPropsWithoutRef<typeof Collapsible.Content> {
  className?: string
}

const CollapseContent = React.forwardRef<
  React.ElementRef<typeof Collapsible.Content>,
  CollapseContentProps
>(({ className, ...props }, ref) => (
  <Collapsible.Content
    ref={ref}
    className={cn("overflow-hidden text-sm text-muted-foreground", className)}
    {...props}
  />
))

CollapseContent.displayName = Collapsible.Content.displayName

export { Collapse, CollapseTrigger, CollapseContent }
