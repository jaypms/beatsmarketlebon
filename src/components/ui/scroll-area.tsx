"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollArea = ScrollAreaPrimitive.Root
const ScrollAreaViewport = ScrollAreaPrimitive.Viewport
const ScrollAreaScrollbar = ScrollAreaPrimitive.Scrollbar
const ScrollAreaThumb = ScrollAreaPrimitive.Thumb
const ScrollAreaCorner = ScrollAreaPrimitive.Corner

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  className?: string
}

export function CustomScrollArea({ className, ...props }: ScrollAreaProps) {
  return (
    <ScrollArea
      className={cn("relative overflow-hidden rounded-md", className)}
      {...props}
    />
  )
}
