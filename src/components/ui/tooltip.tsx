"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = TooltipPrimitive.Content
const TooltipArrow = TooltipPrimitive.Arrow

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
}

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  className?: string
}

export function CustomTooltipContent({ className, ...props }: TooltipContentProps) {
  return (
    <TooltipContent
      className={cn(
        "z-50 rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    />
  )
}
