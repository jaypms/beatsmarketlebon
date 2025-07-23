"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = DropdownMenuPrimitive.Content
const DropdownMenuItem = DropdownMenuPrimitive.Item
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem
const DropdownMenuLabel = DropdownMenuPrimitive.Label
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator
const DropdownMenuGroup = DropdownMenuPrimitive.Group

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
}

interface DropdownMenuProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  className?: string
}

export function CustomDropdownMenuContent({ className, ...props }: DropdownMenuProps) {
  return (
    <DropdownMenuContent
      className={cn(
        "z-50 min-w-[8rem] rounded-md border border-border bg-background p-1 shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    />
  )
}
