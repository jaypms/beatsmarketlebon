import React from "react"
import { cn } from "@/lib/utils"

export function Avatar({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  return (
    <img
      className={cn(
        "inline-block h-8 w-8 rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

export function AvatarFallback({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}

export function AvatarImage({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  return (
    <img
      className={cn(
        "h-full w-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}
