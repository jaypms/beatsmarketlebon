"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitive.Provider
const ToastRoot = ToastPrimitive.Root
const ToastTitle = ToastPrimitive.Title
const ToastDescription = ToastPrimitive.Description
const ToastAction = ToastPrimitive.Action
const ToastViewport = ToastPrimitive.Viewport

export {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
}

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastRoot> {
  className?: string
}

export function CustomToastRoot({ className, ...props }: ToastProps) {
  return (
    <ToastRoot
      className={cn(
        "group pointer-events-auto relative mb-4 w-full max-w-sm rounded-md border border-border bg-background p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}
