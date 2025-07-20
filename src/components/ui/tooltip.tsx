"use client"

import * as React from "react"
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip-primitive"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  delayDuration?: number
}

function Tooltip({
  children,
  content,
  delayDuration = 300,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...props}>{content}</TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}

export { Tooltip }
