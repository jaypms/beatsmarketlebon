"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const DialogRoot = Dialog.Root
const DialogTrigger = Dialog.Trigger
const DialogPortal = Dialog.Portal
const DialogOverlay = Dialog.Overlay
const DialogContent = Dialog.Content
const DialogTitle = Dialog.Title
const DialogDescription = Dialog.Description
const DialogClose = Dialog.Close

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  className?: string
}

export function CustomDialogContent({ className, ...props }: DialogContentProps) {
  return (
    <DialogContent
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md border border-border bg-background p-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}
