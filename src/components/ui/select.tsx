"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectTrigger = SelectPrimitive.Trigger
const SelectValue = SelectPrimitive.Value
const SelectIcon = SelectPrimitive.Icon
const SelectContent = SelectPrimitive.Content
const SelectViewport = SelectPrimitive.Viewport
const SelectItem = SelectPrimitive.Item
const SelectItemText = SelectPrimitive.ItemText
const SelectScrollUpButton = SelectPrimitive.ScrollUpButton
const SelectScrollDownButton = SelectPrimitive.ScrollDownButton

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  className?: string
}

export function CustomSelectContent({ className, ...props }: SelectProps) {
  return (
    <SelectContent
      className={cn(
        "z-50 min-w-[8rem] rounded-md border border-border bg-background p-1 shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    />
  )
}
