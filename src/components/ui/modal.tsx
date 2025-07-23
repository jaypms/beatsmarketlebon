"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

export const Modal = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <Dialog.Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md border border-border bg-background p-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Root>
  )
}
