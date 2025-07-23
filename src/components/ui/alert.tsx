"use client"

import * as React from "react"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"

export const Alert = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <AlertDialog.Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md border border-border bg-background p-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        {children}
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
